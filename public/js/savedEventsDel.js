// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');
//         let data;

//         try {
//         const response = await fetch(`/api/events/${id}`, {
//             method: 'DELETE',
//             body: { id: id }
//         });
        
//         data = await response.json()
//         console.log(data)
//         if (data.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed to delete project');
//         }
//     }
// };

const delBtnSaved = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        let data;

        try {
            const response = await fetch(`/api/events/saved`, {
                method: 'DELETE',
                body: JSON.stringify({ id: id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            data = await response.json()
            console.log(data)
        } catch(err){
            console.log(err)
        }

        if (data) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
       
    }
};

//document.querySelector('.deleteBtn').addEventListener('click', delButtonHandler);

var deleteBtn = document.querySelectorAll(".deleteBtn")
for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", delBtnSaved);
}