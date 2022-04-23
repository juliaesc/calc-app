/* eslint no-eval: 0 */
import React from 'react' // No es necesario este import
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'
import { useState } from 'react'

const App = () => {

    const [stack, setStack] = useState('')
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"
    console.log('Renderización de App')
    return (
        <main className='react-calculator'>
            <Result value={value}/>
            <Numbers 
                onClickNumber = { number =>
                    {
                        console.log("Número", number)
                        setStack(`${stack}${number}`)
                    }
                }
            />
            <Functions 
                onContentClear = { () =>
                    {
                        console.log("Clear")
                        setStack("")
                    } 
                }
                onDelete = { () => 
                    {
                        if (stack.length > 0) {
                            var newStack = stack.substring(0, stack.length - 1)
                            console.log("Delete", newStack)
                            setStack(`${newStack}`)
                        }
                    }    
                }
            />
            <MathOperations 
                onClickOperation = { operation =>
                    {
                        console.log("Operación", operation)
                        setStack(`${stack}${operation}`)
                    }
                }
                onClickEqual = { equals => 
                    {
                        console.log("Igual a", equals)
                        setStack(eval(stack).toString())
                    }    
                }   
            />
        </main>
    )
}

export default App