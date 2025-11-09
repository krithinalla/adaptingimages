const images = [
    'Images/adapt-1.jpeg',
    'Images/adapt-2.webp',
    'Images/adapt-3.jpg',
    'Images/adapt-4.webp',
    'Images/adapt-5.jpeg',
    'Images/adapt-6.jpeg',
    'Images/adapt-7.jpeg',
    'Images/adapt-8.jpeg',
    'Images/adapt-9.jpeg',
    'Images/adapt-10.jpeg',
    'Images/adapt-11.jpeg',
    'Images/adapt-12.jpeg',
    'Images/adapt-13.jpeg',
    'Images/adapt-14.jpeg',
    'Images/adapt-15.jpeg',
    'Images/adapt-16.jpeg',
    'Images/adapt-17.jpeg',
    'Images/adapt-18.jpeg',
    'Images/adapt-19.jpeg',
    'Images/adapt-20.jpeg',
    'Images/adapt-21.jpeg',
    'Images/adapt-22.jpeg',
    'Images/adapt-23.jpeg',
    'Images/adapt-24.jpeg',
    'Images/adapt-25.jpeg',
    'Images/adapt-26.jpeg',
    'Images/adapt-27.jpeg',
    'Images/adapt-28.jpeg',
    'Images/adapt-29.jpeg',
    'Images/adapt-30.jpeg'
];

const imageTexts = {
    'Images/adapt-1.jpeg': {
        title: 'Diatoms',
        text: 'Diatoms build silica shells in diverse shapes that maximize light absorption and buoyancy in different water conditions.'
    },
    'Images/adapt-2.webp': {
        title: 'Adapt Image 2',
        text: 'Octopuses can rewire their brains to adapt to different ocean temperatures.'
    },
    'Images/adapt-3.jpg': {
        title: 'Adapt Image 3',
        text: 'Urban birds modify the frequency of their songs realtime to higher frequencies to be heard over city noise.'
    },
    'Images/adapt-4.webp': {
        title: 'Adapt Image 4',
        text: 'Humans carried water in containers, allowing travel and survival in dry environments.'
    },
    'Images/adapt-5.jpeg': {
        title: 'Adapt Image 5',
        text: 'Plants evolve different leaf shapes to adjust for sunlight, moisture loss, and temperature across environments.'
    },
    'Images/adapt-6.jpeg': {
        title: 'Adapt Image 6',
        text: 'Giraffes travel in groups (herding) to increase safety and coordinate movement across large open landscapes.'
    },
    'Images/adapt-7.jpeg': {
        title: 'Adapt Image 7',
        text: 'Wind and rain carve repeating ridge patterns, creating surfaces that reduce further erosion by dispersing runoff.'
    },
    'Images/adapt-8.jpeg': {
        title: 'Adapt Image 8',
        text: 'The crocodile’s eyes and nostrils sit on top of its head so it can breathe and watch without being seen.'
    },
    'Images/adapt-9.jpeg': {
        title: 'Adapt Image 9',
        text: 'Antelope allow birds to perch and remove parasites, a mutualistic behavior that improves health for both species.'
    },
    'Images/adapt-10.jpeg': {
        title: 'Adapt Image 10',
        text: 'The animal’s color blends with the grass, helping it stay hidden from predators or prey.'
    },
    'Images/adapt-11.jpeg': {
        title: 'Adapt Image 11',
        text: 'Frogs position themselves under lily pads to stay cool and hide from predators.'
    },
    'Images/adapt-12.jpeg': {
        title: 'Adapt Image 12',
        text: 'The ladybugs’ bright red shells warn predators they are toxic, helping prevent attacks.'
    },
    'Images/adapt-13.jpeg': {
        title: 'Adapt Image 13',
        text: 'Deer cool their bodies by standing in water, helping them avoid overheating in warm environments.'
    },
    'Images/adapt-14.jpeg': {
        title: 'Adapt Image 14',
        text: 'Cacti store water in thick ribbed stems, which expand and contract as water is gained or lost.'
    },
    'Images/adapt-15.jpeg': {
        title: 'Adapt Image 15',
        text: 'Moss compresses and springs back after pressure, allowing it to survive trampling and retain moisture in harsh conditions.'
    },
    'Images/adapt-16.jpeg': {
        title: 'Adapt Image 16',
        text: 'Jaguars have strong limbs and dense muscles that make them powerful swimmers, helping them hunt in river habitats.'
    },
    'Images/adapt-17.jpeg': {
        title: 'Adapt Image 17',
        text: 'The tiger’s striped pattern breaks up its outline, making it nearly invisible while stalking.'
    },
    'Images/adapt-18.jpeg': {
        title: 'Adapt Image 18',
        text: 'The dolphin surfs the wave to save energy, letting the water carry it forward with less effort.'
    },
    'Images/adapt-19.jpeg': {
        title: 'Adapt Image 19',
        text: 'Heat-loving bacteria color the water in rings based on temperature tolerance, each species thriving at a different heat level.'
    },
    'Images/adapt-20.jpeg': {
        title: 'Adapt Image 20',
        text: 'Monstera leaves develop holes (fenestrations) to let wind pass through and allow light to reach lower leaves in the rainforest understory.'
    },
    'Images/adapt-21.jpeg': {
        title: 'Adapt Image 21',
        text: 'The tree grows in the direction of prevailing winds to reduce stress and avoid breaking.'
    },
    'Images/adapt-22.jpeg': {
        title: 'Adapt Image 22',
        text: 'Moss stores and retains water in its dense carpet-like form, allowing it to survive in thin or nutrient-poor soils.'
    },
    'Images/adapt-23.jpeg': {
        title: 'Adapt Image 23',
        text: 'Polar bears eat seals and stain their fur with blood, an adaptation to a carnivorous diet in ice-covered regions where vegetation is scarce.'
    },
    'Images/adapt-24.jpeg': {
        title: 'Adapt Image 24',
        text: 'Slot canyons form where water repeatedly cuts through soft rock, shaping smooth flowing curves over time.'
    },
    'Images/adapt-25.jpeg': {
        title: 'Adapt Image 25',
        text: 'Vining plants coil their tendrils around supports to climb toward sunlight more efficiently.'
    },
    'Images/adapt-26.jpeg': {
        title: 'Adapt Image 26',
        text: 'Whales use powerful tail flukes to propel themselves efficiently, enabling long-distance migration with minimal energy loss.'
    },
    'Images/adapt-27.jpeg': {
        title: 'Adapt Image 27',
        text: 'When damaged at the growth point, some cacti grow in fan-like crests, spreading instead of rising to maximize sunlight capture.'
    },
    'Images/adapt-28.jpeg': {
        title: 'Adapt Image 28',
        text: 'Penguins form social colonies to conserve heat, protect their young, and improve survival in coastal environments.'
    },
    'Images/adapt-29.jpeg': {
        title: 'Adapt Image 29',
        text: 'The green snail’s shell pigmentation matches surrounding foliage, providing camouflage from predators.'
    },
    'Images/adapt-30.jpeg': {
        title: 'Adapt Image 30',
        text: 'The ants form a coordinated drinking ring to share water without drowning or breaking the water’s surface tension.'
    }
};

let imageIndex = 0;
let stopTimer = null;
let protectTimer = null;
let currentMouseX = 0;
let currentMouseY = 0;
const trailImages = [];
const stoppedImages = new Set(); // Track all stopped images
let currentStoppedImage = null; // Track the most recently stopped image for text display
let imageAtStopStart = null; // Track which image was at cursor when mouse stopped

// Weighted selection for images - adapt-2, adapt-3, and adapt-4 appear more frequently
function getWeightedImageIndex() {
    // Create weighted array: adapt-2 (index 1), adapt-3 (index 2), adapt-4 (index 3) have weight 3
    // All other images have weight 1
    const weights = images.map((_, index) => {
        if (index === 1 || index === 2 || index === 3) {
            return 3; // adapt-2, adapt-3, adapt-4 appear 3x more often
        }
        return 1;
    });
    
    // Calculate total weight
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    
    // Generate random number between 0 and totalWeight
    let random = Math.random() * totalWeight;
    
    // Find which image index this random number corresponds to
    for (let i = 0; i < weights.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return i;
        }
    }
    
    // Fallback (shouldn't reach here)
    return 0;
}

function fadeImage(container) {
    // Don't fade if this is a stopped image
    if (stoppedImages.has(container)) {
        return;
    }
    
    const imgElement = container.querySelector('.trail-image');
    if (imgElement && !imgElement.classList.contains('fading') && !imgElement.classList.contains('persistent')) {
        // Add fading class to image and retracting class to container simultaneously
        imgElement.classList.add('fading');
        container.classList.add('retracting');
        
        setTimeout(() => {
            if (container.parentNode && !stoppedImages.has(container)) {
                container.remove();
                const index = trailImages.indexOf(container);
                if (index > -1) {
                    trailImages.splice(index, 1);
                }
                // Check if all images faded after this one is removed
                checkIfAllImagesFaded();
            }
        }, 2000);
    }
}

function checkIfAllImagesFaded() {
    // Count visible images (not fading, not removed, not stopped)
    const visibleImages = trailImages.filter(container => {
        if (stoppedImages.has(container)) {
            return false; // Don't count stopped images
        }
        const img = container.querySelector('.trail-image');
        return img && !img.classList.contains('fading') && container.parentNode;
    });
    
    // If no visible images (or only stopped ones remain), show background text
    if (visibleImages.length === 0) {
        showBackgroundText();
    } else {
        hideBackgroundText();
    }
}

function showBackgroundText() {
    document.querySelectorAll('.background-text').forEach(text => {
        text.classList.add('visible');
    });
}

function hideBackgroundText() {
    document.querySelectorAll('.background-text').forEach(text => {
        text.classList.remove('visible');
    });
}

function getOffsetPositionFromStoppedImages(x, y, minDistance = 200) {
    // Check if position is too close to any stopped image
    // Find the closest stopped image
    let closestContainer = null;
    let minDist = Infinity;
    
    stoppedImages.forEach(container => {
        const imgX = parseFloat(container.dataset.x);
        const imgY = parseFloat(container.dataset.y);
        const distance = Math.sqrt(
            Math.pow(x - imgX, 2) + Math.pow(y - imgY, 2)
        );
        
        if (distance < minDist) {
            minDist = distance;
            closestContainer = container;
        }
    });
    
    // If too close to the closest stopped image, calculate offset
    if (closestContainer && minDist < minDistance) {
        const imgX = parseFloat(closestContainer.dataset.x);
        const imgY = parseFloat(closestContainer.dataset.y);
        // Calculate direction away from stopped image
        const angle = Math.atan2(y - imgY, x - imgX);
        // Offset by minDistance in the direction away from the stopped image
        const offsetX = imgX + Math.cos(angle) * minDistance;
        const offsetY = imgY + Math.sin(angle) * minDistance;
        return { x: offsetX, y: offsetY, needsOffset: true };
    }
    
    return { x: x, y: y, needsOffset: false };
}

function createTrailImage(x, y) {
    // Create container for image and text
    const container = document.createElement('div');
    container.className = 'image-container';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    
    // Use weighted selection to favor adapt-2, adapt-3, and adapt-4
    imageIndex = getWeightedImageIndex();
    
    const img = document.createElement('img');
    img.src = images[imageIndex];
    img.className = 'trail-image';
    
    // Store the image source and position
    img.dataset.imageSrc = images[imageIndex];
    container.dataset.x = x;
    container.dataset.y = y;
    container.dataset.createdAt = Date.now(); // Track creation time
    
    // Create text display element
    const textDiv = document.createElement('div');
    textDiv.className = 'text-display';
    // Get the image number (1-indexed)
    const imageNumber = imageIndex + 1;
    textDiv.innerHTML = `
        <div class="figure-caption">Fig ${imageNumber}</div>
        <div class="body-text">${imageTexts[images[imageIndex]].text}</div>
    `;
    
    container.appendChild(img);
    container.appendChild(textDiv);
    
    // Set text width to match image width after image loads
    const setTextWidth = function() {
        const imageWidth = img.offsetWidth || img.clientWidth;
        if (imageWidth > 0) {
            textDiv.style.width = imageWidth + 'px';
        }
    };
    
    // Handle both cached and non-cached images
    if (img.complete) {
        // Image already loaded (cached)
        setTimeout(setTextWidth, 0);
    } else {
        // Image not yet loaded
        img.onload = setTextWidth;
    }
    document.body.appendChild(container);
    
    trailImages.push(container);
    
    // Start fading after 1 second (unless it's a stopped image)
    const fadeTimer = setTimeout(() => {
        if (!stoppedImages.has(container)) {
            fadeImage(container);
        }
    }, 1000);
    
    // Store the fade timer so we can cancel it
    container.dataset.fadeTimer = fadeTimer;
}

function findImageAtPosition(x, y) {
    // Find the image at or very close to the cursor position
    // Check images in reverse order (most recent first) to prioritize the current cursor image
    let closestContainer = null;
    let minDistance = Infinity;
    
    for (let i = trailImages.length - 1; i >= 0; i--) {
        const container = trailImages[i];
        const imgX = parseFloat(container.dataset.x);
        const imgY = parseFloat(container.dataset.y);
        
        // Check if cursor is within the image bounds (increased to 200px radius for better detection)
        const distance = Math.sqrt(
            Math.pow(x - imgX, 2) + Math.pow(y - imgY, 2)
        );
        
        if (distance < 200 && distance < minDistance) {
            minDistance = distance;
            closestContainer = container;
            // Prefer the most recent image (last in array) if distances are similar
            break; // Since we're iterating from most recent, take the first match
        }
    }
    
    return closestContainer;
}

function protectImageAtCursor() {
    // Find image at current mouse position and immediately protect it from fading
    let imageContainer = null;
    if (trailImages.length > 0) {
        const mostRecent = trailImages[trailImages.length - 1];
        const imgX = parseFloat(mostRecent.dataset.x);
        const imgY = parseFloat(mostRecent.dataset.y);
        const distance = Math.sqrt(
            Math.pow(currentMouseX - imgX, 2) + Math.pow(currentMouseY - imgY, 2)
        );
        if (distance < 100) {
            imageContainer = mostRecent;
        }
    }
    
    // If most recent isn't close enough, use the findImageAtPosition function
    if (!imageContainer) {
        imageContainer = findImageAtPosition(currentMouseX, currentMouseY);
    }
    
    if (imageContainer && !stoppedImages.has(imageContainer)) {
        // Cancel fade timer for this image immediately
        const fadeTimer = imageContainer.dataset.fadeTimer;
        if (fadeTimer) {
            clearTimeout(parseInt(fadeTimer));
            imageContainer.dataset.fadeTimer = null;
        }
        
        // Add this image to stopped images set
        stoppedImages.add(imageContainer);
        
        const img = imageContainer.querySelector('.trail-image');
        if (img) {
            // Immediately stop any fading and make it fully visible
            img.classList.remove('fading');
            img.classList.add('persistent');
            // Force immediate opacity without transition
            img.style.transition = 'none';
            img.style.opacity = '1';
            // Re-enable transition for other properties after a brief moment
            setTimeout(() => {
                img.style.transition = '';
            }, 10);
        }
        
        // Also mark container as persistent to prevent it from retracting
        imageContainer.classList.remove('retracting');
        imageContainer.classList.add('persistent');
        imageContainer.style.transition = 'none';
        imageContainer.style.opacity = '1';
        setTimeout(() => {
            imageContainer.style.transition = '';
        }, 10);
    }
    
    return imageContainer;
}

function showTextForImage(imageContainer) {
    // If no image container provided, try to find one
    if (!imageContainer) {
        // First try to find the most recent image (likely at cursor)
        if (trailImages.length > 0) {
            const mostRecent = trailImages[trailImages.length - 1];
            const imgX = parseFloat(mostRecent.dataset.x);
            const imgY = parseFloat(mostRecent.dataset.y);
            const distance = Math.sqrt(
                Math.pow(currentMouseX - imgX, 2) + Math.pow(currentMouseY - imgY, 2)
            );
            if (distance < 150) {
                imageContainer = mostRecent;
            }
        }
        
        // If most recent isn't close enough, use the findImageAtPosition function
        if (!imageContainer) {
            imageContainer = findImageAtPosition(currentMouseX, currentMouseY);
        }
    }
    
    // Show text if we have a valid image container
    if (imageContainer) {
        // Make sure this image is protected (in case it wasn't already)
        if (!stoppedImages.has(imageContainer)) {
            protectImageAtCursor();
        }
        
        // Set this as the current stopped image (for text display)
        currentStoppedImage = imageContainer;
        
        // Fade all other images (but not stopped ones)
        trailImages.forEach(container => {
            if (!stoppedImages.has(container)) {
                // Cancel any pending fade timers
                const timer = container.dataset.fadeTimer;
                if (timer) {
                    clearTimeout(parseInt(timer));
                    container.dataset.fadeTimer = null;
                }
                // Fade immediately
                fadeImage(container);
            }
        });
        
        // Show text immediately (showTextForImage is already called after 2 seconds of mouse stopping)
        const textDisplay = imageContainer.querySelector('.text-display');
        const img = imageContainer.querySelector('.trail-image');
        if (img && textDisplay) {
            img.classList.add('hovered');
            // Reset any previous transition styles
            textDisplay.style.transition = '';
            // Show text immediately since we're already 2 seconds after mouse stopped
            textDisplay.classList.add('visible');
            // Force visibility with inline styles as backup
            textDisplay.style.opacity = '1';
            textDisplay.style.display = 'block';
            textDisplay.style.visibility = 'visible';
        }
        
        // Check if all other images are fading
        setTimeout(() => {
            checkIfAllImagesFaded();
        }, 2100);
    }
}

let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (e) => {
    currentMouseX = e.clientX;
    currentMouseY = e.clientY;
    
    // Clear the stop timer and protect timer
    if (stopTimer) {
        clearTimeout(stopTimer);
        stopTimer = null;
    }
    if (protectTimer) {
        clearTimeout(protectTimer);
        protectTimer = null;
    }
    
    // Reset the image tracking when mouse moves
    imageAtStopStart = null;
    
    // Keep stopped images and text visible - just remove hover effect
    // Remove hovered class from all images (but keep them persistent)
    document.querySelectorAll('.trail-image.hovered').forEach(img => {
        img.classList.remove('hovered');
    });
    
    // Hide background text when mouse moves
    hideBackgroundText();
    
    // Resume normal fading for images that aren't stopped
    // (restart fade timers for images that haven't started fading)
    trailImages.forEach(container => {
        const img = container.querySelector('.trail-image');
        if (img && !img.classList.contains('fading') && !container.dataset.fadeTimer) {
            const fadeTimer = setTimeout(() => {
                fadeImage(container);
            }, 1000);
            container.dataset.fadeTimer = fadeTimer;
        }
    });
    
    // Create new image at cursor position (with offset from stopped images if needed)
    const x = e.clientX;
    const y = e.clientY;
    
    // Check if we need to offset from stopped images
    const offsetPos = getOffsetPositionFromStoppedImages(x, y, 200);
    const createX = offsetPos.needsOffset ? offsetPos.x : x;
    const createY = offsetPos.needsOffset ? offsetPos.y : y;
    
    // Only create new image if mouse moved significantly
    const distance = Math.sqrt(
        Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2)
    );
    
    if (distance > 20) {
        createTrailImage(createX, createY);
        lastX = x;
        lastY = y;
    }
    
    // Immediately protect the image at cursor when mouse stops (after a short delay)
    protectTimer = setTimeout(() => {
        protectImageAtCursor();
    }, 100);
    
    // Set timer to show text after 2 seconds when mouse stops
    // We'll find the image at that time
    stopTimer = setTimeout(() => {
        // Find image at cursor position after 2 seconds of no movement
        let imageContainer = null;
        
        // First, try to find image at exact cursor position
        if (trailImages.length > 0) {
            const mostRecent = trailImages[trailImages.length - 1];
            const imgX = parseFloat(mostRecent.dataset.x);
            const imgY = parseFloat(mostRecent.dataset.y);
            const dist = Math.sqrt(
                Math.pow(currentMouseX - imgX, 2) + Math.pow(currentMouseY - imgY, 2)
            );
            if (dist < 200) { // Increased threshold for better detection
                imageContainer = mostRecent;
            }
        }
        
        // If not found, try findImageAtPosition
        if (!imageContainer) {
            imageContainer = findImageAtPosition(currentMouseX, currentMouseY);
        }
        
        // If still not found, use the most recent image as fallback
        if (!imageContainer && trailImages.length > 0) {
            imageContainer = trailImages[trailImages.length - 1];
        }
        
        // Store which image was at cursor when mouse stopped (for comparison)
        imageAtStopStart = imageContainer;
        
        // Now show the text, passing the image container we found
        showTextForImage(imageContainer);
    }, 2000);
});

// Double-click handler to fade out images and show text box
let doubleClickTextBox = null;

function createDoubleClickTextBox() {
    // Create text box if it doesn't exist
    if (!doubleClickTextBox) {
        doubleClickTextBox = document.createElement('div');
        doubleClickTextBox.className = 'double-click-text-box';
        doubleClickTextBox.innerHTML = `
            <div class="sub-text">
                adaptionlabs.ai/careers
            </div>
        `;
        document.body.appendChild(doubleClickTextBox);
    }
    return doubleClickTextBox;
}

function fadeOutAllImages() {
    // Fade out all trail images, including stopped/persistent ones
    const allContainers = Array.from(document.querySelectorAll('.image-container'));
    
    allContainers.forEach(container => {
        const img = container.querySelector('.trail-image');
        if (img) {
            // Cancel any pending fade timers
            const timer = container.dataset.fadeTimer;
            if (timer) {
                clearTimeout(parseInt(timer));
                container.dataset.fadeTimer = null;
            }
            
            // Remove persistent class and inline styles that might prevent fading
            img.classList.remove('persistent', 'hovered');
            container.classList.remove('persistent');
            img.style.transition = '';
            img.style.opacity = '';
            container.style.transition = '';
            container.style.opacity = '';
            
            // Add fading class to image and retracting class to container
            img.classList.add('fading');
            container.classList.add('retracting');
            
            // Remove from DOM after fade completes
            setTimeout(() => {
                if (container.parentNode) {
                    container.remove();
                }
            }, 2000);
        }
    });
    
    // Clear the trail images array and stopped images set after fade completes
    setTimeout(() => {
        trailImages.length = 0;
        stoppedImages.clear();
    }, 2000);
}

function showDoubleClickTextBox() {
    const textBox = createDoubleClickTextBox();
    // Wait for images to completely fade out (2 seconds) before fading in the text
    setTimeout(() => {
        textBox.classList.add('visible');
    }, 2000);
}

document.addEventListener('keydown', (e) => {
    // Trigger on spacebar
    if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        
        // Fade out all images
        fadeOutAllImages();
        
        // Show the text box
        showDoubleClickTextBox();
        
        // Clear any pending timers
        if (stopTimer) {
            clearTimeout(stopTimer);
            stopTimer = null;
        }
        if (protectTimer) {
            clearTimeout(protectTimer);
            protectTimer = null;
        }
    }
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    if (stopTimer) {
        clearTimeout(stopTimer);
    }
    if (protectTimer) {
        clearTimeout(protectTimer);
    }
    trailImages.forEach(container => {
        const timer = container.dataset.fadeTimer;
        if (timer) {
            clearTimeout(parseInt(timer));
        }
    });
});

