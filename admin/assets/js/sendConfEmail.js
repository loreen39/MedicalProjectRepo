let sendConfEmailBtn = document.getElementById('sendConfEmailBtn');
sendConfEmailBtn?.addEventListener("click", function(event) {
    if (event.target.type === 'submit') {
        event.preventDefault();
        alert("stop submit");

    }else{  
        const sendConfEmails = async () => {
            try {
                const response = await fetch('sendConfEmail/sendEmail.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // Omit the body property if you don't need to send any data
                });
        
                if (response.ok) {
                    // Assuming that your PHP script returns a JSON response
                    const data = await response.json();
        
                    if (data.response === 200) {
                        swal("Success!", "Confirmation Emails Sent Successfully!", "success");
                    } else {
                        swal("Error!", data.message, "error");
                    }
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        // Call the function
        sendConfEmails();
    }

});

let sendDonorEmailBtn = document.getElementById('sendDonorEmailBtn');
sendDonorEmailBtn?.addEventListener("click", function(event) {
    if (event.target.type === 'submit') {
        event.preventDefault();
        alert("stop submit");

    }else{  
        const sendDonorEmails = async () => {
            try {
                const response = await fetch('sendConfEmail/sendDonorEmail.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // Omit the body property if you don't need to send any data
                });
        
                if (response.ok) {
                    // Assuming that your PHP script returns a JSON response
                    const data = await response.json();
        
                    if (data.response === 200) {
                        swal("Success!", "Donation Emails Sent Successfully!", "success");
                    } else {
                        swal("Error!", data.message, "error");
                    }
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        // Call the function
        sendDonorEmails();
    }

});