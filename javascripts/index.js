const singninBtn = document.querySelector('.singninBtn')
            const singnupBtn = document.querySelector('.singnupBtn')
            const formBx = document.querySelector('.formBx')
            const body = document.querySelector('body')

            singnupBtn.onclick = function(){
                formBx.classList.add('active')
                body.classList.add('active')
            }

            singninBtn.onclick = function(){
                formBx.classList.remove('active')
                body.classList.remove('active')
            }