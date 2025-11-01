{/* 

<div class="container"> 
    <h1>this is</h1>  
    <p class="paragraph">I am   -> "I am <1 Clicks> from" 
       <button>1 clicks</button>
       from 
    </p>
</div> 

*/}

/**
 * 1. type:
 *        -> String: html element: document.createElement()
 *        -> function: custom component: call that function add if we have props then pass that also.
 * 
 * 2. props:
 *         -> object
 *               -> value -> String: normal attribute example: class, id -> setAttribute
 *               -> Children:
 *                          -> Array: Can have value as a string
 *                                    Can have value as a function: customer element 
 *                                    Can have value as a object
 */ 


const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1',
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        },
                        ' from'
                    ]
                }
            }
        ]
    }
}

function render(obj) {
    let element;
    if(typeof obj.type === "string"){
        element = document.createElement(obj.type);
    }else if(typeof obj.type === "function"){
        const prop = obj['props']; 
        let returnResponse = obj.type(prop);
        return render(returnResponse);
    }

    const props = obj.props;
    for(let prop in props){
        if(prop === "children"){
            const children = props[prop];
            let isArray = Array.isArray(children);
            if(isArray){
                for(let i = 0 ; i < children.length;i++){
                    let child = children[i];
                    if(typeof child === "string"){
                        const textNode = document.createTextNode(child);
                        element.appendChild(textNode);
                    }else{
                        const childElem = render(child);
                        console.log(childElem);
                        element.appendChild(childElem);
                    }
                }
            }else{
                const childElem = document.createTextNode(props[prop]);
                element.appendChild(childElem);
            }
        }else if(typeof props[prop] === "string"){
            element.setAttribute(prop, props[prop]);
        }
    }

    return element;
}

document.addEventListener("DOMContentLoaded", function(){
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);

    console.log("WholeApp: ", wholeApp);
    rootElement.appendChild(wholeApp);
});