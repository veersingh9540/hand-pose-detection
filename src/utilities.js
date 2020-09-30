// Points for fingers
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };
  




// Drawing function 
export const  drawHand =(predictions , ctx)=>{
    // check if we have predictions 
    if(predictions.length > 0 ){
        // loop through each predictions
        predictions.forEach((prediction)=>{
            // Grab landamarks 
            const landmarks = prediction.landmarks;
            
            // loop thorough fingers 
            for(let j=0 ; j< Object.keys(fingerJoints).length; j++){
                let finger = Object.keys(fingerJoints)[j];
                // loop through pairs of joints 
                for (let k =0 ; k < fingerJoints[finger].length -1; k++ ){
                    // get pairs of joints 
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondjointIndex = fingerJoints[finger][k+1];

                    // draw path 
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1],
                    );
                    ctx.lineTo(
                        landmarks[secondjointIndex][0],
                        landmarks[secondjointIndex][1],
                    )
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 4 ;
                    ctx.stroke();

                }
            } 






             // Loop through landmarks and draw em
                for (let i = 0; i < landmarks.length; i++) {
                    // Get x point
                    const x = landmarks[i][0];
                    // Get y point
                    const y = landmarks[i][1];
                    // Start drawing
                    ctx.beginPath();
                    ctx.arc(x, y, 8, 0, 3 * Math.PI);

                    // Set line color
                    ctx.fillStyle = "red"
                    ctx.fill();
                }
        });
    }

};