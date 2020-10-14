let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function set()
{
    for( let index = 0; index < elements.length; index++ )
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        
        div.style[ cssProperty ] = cssValue;
    }
}

for (index = 0; index < elements.length; index++) {
    elements[index].addEventListener('change', set);
}

// References: https://www.udemy.com/course/javascript-essentials/learn/lecture/4275948#overview
