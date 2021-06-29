AFRAME.registerComponent('add-buttons', {
    init: function () {
        var button1 = document.createElement('button')
        button1.innerHTML = 'ORDER NOW'
        button1.setAttribute('id', 'order-button')
        button1.setAttribute('class', 'buttons')

        var button2 = document.createElement('button')
        button2.innerHTML = 'ORDER SUMMARY'
        button2.setAttribute('id', 'order-summary-button')
        button2.setAttribute('class', 'buttons')

        var buttonDiv = document.getElementById('button-div')
        buttonDiv.appendChild(button2)
        buttonDiv.appendChild(button1)
    },
});
