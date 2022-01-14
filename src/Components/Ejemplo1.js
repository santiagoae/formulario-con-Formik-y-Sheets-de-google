import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'



const Ejemplo1 = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    
    return (
       
        <div>
            <Formik
            
            initialValues={{
                nombre: "",
                correo: ""
            }}

             

            onSubmit={async(valores, {resetForm} )=>{

                const peticion = await fetch('https://sheet.best/api/sheets/f20a81a9-126b-44b4-8490-f0c643901f58', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify({
                        'Nombre' : valores.nombre,
                        'Correo' : valores.correo
                    })
                })
                const contenido = peticion.json();

                //actualizar
                fetch('https://sheet.best/api/sheets/f20a81a9-126b-44b4-8490-f0c643901f58/1', {
                    method: 'PATCH',
                    mode: 'cors',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify({
                        'Nombre' : 'leonidas',
                        'Correo' : 'leonidas@gmail.com'
                    })
                })
                

                resetForm();
                cambiarFormularioEnviado(true);
                setTimeout(()=>cambiarFormularioEnviado(false), 3000);
                console.log("formulario enviado");
                console.log(valores);
            }}

            

            validate={(valores)=>{

                let errores={}

                if (!valores.nombre) {
                    errores.nombre = "Por favor ingresa un nombre"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = "El nombre solo puede contener letras y espacios"
                }

                if (!valores.correo) {
                    errores.correo = "Por favor ingresa un correo"
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                    errores.correo = "El correo no puede contener caracteres espciales"
                }

                return errores
            }}
            
            >
                {( {errors} )=>(
                    <Form className='formulario'>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field 
                                type="text"
                                id='nombre'
                                name='nombre'
                                placeholder='jon doe'                            
                            />
                            <ErrorMessage name='nombre' component={()=>(<div className='error'>{errors.nombre}</div>)} />                            
                        </div>

                        <div>
                            <label htmlFor="correo">Correo</label>
                            <Field 
                                type="text"
                                id='correo'
                                name='correo'
                                placeholder='correo@correo.com'                            
                            />
                            <ErrorMessage name='correo' component={()=>(<div className='error'>{errors.correo}</div>)} />                                                                 
                        </div>

                        <button type='submit'>Enviar</button>
                        {formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}  
                    </Form>
                )}                
            </Formik>

        </div>
    )
}

export default Ejemplo1
