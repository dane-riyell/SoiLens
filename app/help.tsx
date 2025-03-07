import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useTheme } from './contexts/ThemeContext'; // Import useTheme

export default function HelpScreen() {
  const { theme } = useTheme(); // Access the current theme
  const [isModalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide
  const [expandedBoxes, setExpandedBoxes] = useState([false, false, false, false, false]); // State to manage expanded boxes

  // Function to toggle the modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setCurrentSlide(0); // Reset to the first slide when the modal is opened
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Function to toggle the expanded state of a box
  const toggleBox = (index: number) => {
    const newExpandedBoxes = [...expandedBoxes];
    newExpandedBoxes[index] = !newExpandedBoxes[index];
    setExpandedBoxes(newExpandedBoxes);
  };

  // Array of slide content
  const slides = [
    {
      title: 'Slide 1',
      text: 'This is the first slide. Use the "Next" button to proceed.',
    },
    {
      title: 'Slide 2',
      text: 'This is the second slide. You can go back or proceed to the next slide.',
    },
    {
      title: 'Slide 3',
      text: 'This is the third slide. Keep going!',
    },
    {
      title: 'Slide 4',
      text: 'This is the fourth slide. Almost there!',
    },
    {
      title: 'Slide 5',
      text: 'This is the fifth slide. You are done!',
    },
  ];

  // Array of expandable box content with updated names
  const expandableBoxes = [
    {
      title: 'FAQs (Frequently Asked Questions)',
      text: 'Find answers to common questions about the app and its features.',
    },
    {
      title: 'Troubleshooting Guide',
      text: 'Learn how to resolve common issues and errors you might encounter while using the app.',
    },
    {
      title: 'Glossary of Terms',
      text: 'Understand the key terms and concepts used in the app.',
    },
    {
      title: 'Tips for Best Result',
      text: 'Discover tips and tricks to get the most out of the app and achieve the best results.',
    },
  ];

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      {/* Container for the About content positioned at the top */}
      <View style={[styles.contentBox, theme === 'dark' && styles.darkContentBox]}>
        <Text style={[styles.title, theme === 'dark' && styles.darkText]}>Help</Text>
        <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
          This is the help screen. Here you can provide information that can guide users.
        </Text>

        {/* Add a "How to Use" button */}
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>How to Use</Text>
        </TouchableOpacity>
      </View>

      {/* Expandable Boxes */}
      <ScrollView style={styles.expandableBoxesContainer}>
        {expandableBoxes.map((box, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.expandableBox, theme === 'dark' && styles.darkExpandableBox]}
            onPress={() => toggleBox(index)}
          >
            <Text style={[styles.expandableBoxTitle, theme === 'dark' && styles.darkText]}>
              {box.title}
            </Text>
            {expandedBoxes[index] && (
              <Text style={[styles.expandableBoxText, theme === 'dark' && styles.darkText]}>
                {box.text}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for the "How to Use" pop-up */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={[styles.modalContainer, theme === 'dark' && styles.darkModalContainer]}>
          <View style={[styles.modalContent, theme === 'dark' && styles.darkModalContent]}>
            {/* Current Slide Content */}
            <View style={styles.slide}>
              <Text style={[styles.slideTitle, theme === 'dark' && styles.darkText]}>
                {slides[currentSlide].title}
              </Text>
              <Text style={[styles.slideText, theme === 'dark' && styles.darkText]}>
                {slides[currentSlide].text}
              </Text>
            </View>

            {/* Navigation Buttons */}
            <View style={styles.buttonContainer}>
              {currentSlide > 0 && (
                <TouchableOpacity style={styles.navButton} onPress={goToPreviousSlide}>
                  <Text style={styles.navButtonText}>Previous</Text>
                </TouchableOpacity>
              )}
              {currentSlide < 4 && (
                <TouchableOpacity style={styles.navButton} onPress={goToNextSlide}>
                  <Text style={styles.navButtonText}>Next</Text>
                </TouchableOpacity>
              )}
              {currentSlide === 4 && (
                <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  contentBox: {
    width: '90%', // Adjust the width as needed
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for the content box
    borderRadius: 10, // Rounded corners
    borderWidth: 1,
    borderColor: '#ddd', // Light border color
    marginTop: 20, // Moves content to the upper part of the screen
  },
  darkContentBox: {
    backgroundColor: '#333', // Dark background for the content box
    borderColor: '#444', // Dark border color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000', // Default text color
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Adjust line height for better readability
    color: '#000', // Default text color
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  darkModalContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for dark mode
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  darkModalContent: {
    backgroundColor: '#333',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  slideText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expandableBoxesContainer: {
    width: '90%',
    marginTop: 20,
  },
  expandableBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
  },
  darkExpandableBox: {
    backgroundColor: '#333',
    borderColor: '#444',
  },
  expandableBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  expandableBoxText: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
  },
});