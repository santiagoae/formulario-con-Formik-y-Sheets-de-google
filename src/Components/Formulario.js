

const Formulario = () => {

    // const [inputNombre, cambiarInputNombre] = useState('');
    // const [inputCorreo, cambiarInputCorreo] = useState('');

    //funcion para validar los datos y enviar el formulario
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     //se comprueba si el formulario esta bien diligenciado
    //     //y de ser asi se envia

    //     console.log('Formulario enviado');
    // }

    //Funcion que encarga de cambiar el estado del inputNombre
    // const handleInputNombre = (e)=>{
    //     cambiarInputNombre(e.target.value);
    // }

    // //Funcion para cambiar el estado del inputcorreo
    // const handleInputCorreo = (e)=>{
    //     cambiarInputCorreo(e.target.value);
    // }

    


    return (
        <div>
            
            
        </div>

        //formik normal

        // <div>
        //     <Formik
        //         initialValues={{
        //             nombre: '',
        //             correo: ''
        //         }}
        //         validate={(valores)=>{
        //             let errores = {};
        //             //validacion nombre
        //             if (!valores.nombre) {
        //                 errores.nombre = "Por favor ingresa un nombre";
        //             }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
        //                 errores.nombre = "El nombre solo puede contener letras y espacio"
        //             }

        //             //validacion correo
        //             if (!valores.correo) {
        //                 errores.correo = "Por favor ingresa un correo";
        //             }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
        //                 errores.correo = "El correo solo puede contener letras, numero, puntos, guiones y guion bajo."
        //             }

        //             return errores;
        //         }}
        //         onSubmit={(valores, {resetForm})=>{
        //             resetForm();
        //             console.log("Formulario enviado");
        //             cambiarFormularioEnviado(true);
        //             setTimeout(() => cambiarFormularioEnviado(false), 5000);
        //         }}
                

        //     >
        //         {/* hacemos una estructura renderer prop, para renderizar dentro de una funcion y poderle inyectar valores de formik */}
        //         {({handleSubmit, values, handleChange, handleBlur, errors, touched})=>(
        //             <form className='formulario' onSubmit={handleSubmit}>
                        
        //                 <div>
        //                     <label htmlFor="nombre">Nombre</label>
        //                     <input 
        //                         type="text" 
        //                         id="nombre" 
        //                         name="nombre" 
        //                         placeholder='Santiago Escobar' 
        //                         value={values.nombre}
        //                         onChange={handleChange}
        //                         onBlur={handleBlur}
        //                     />                            
        //                     {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div> }
        //                 </div>
        //                 <div>
        //                     <label htmlFor="correo">Correo</label>
        //                     <input 
        //                         type="email" 
        //                         id="correo" 
        //                         name="correo" 
        //                         placeholder='correo@correo.com' 
        //                         value={values.correo}
        //                         onChange={handleChange}
        //                         onBlur={handleBlur}
        //                     />
        //                     {touched.correo && errors.correo && <div className='error'>{errors.correo}</div> }
        //                 </div>

        //                 <button type="submit">Enviar</button>
        //                 {formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
        //             </form>
        //         )}
                
        //     </Formik>
            
        // </div>





        // <div>
        //     <form action="" onSubmit={handleSubmit} className='formulario'>
        //         <div>
        //             <label htmlFor="nombre">Nombre</label>
        //             <input 
        //                 type="text" 
        //                 name="nombre"
        //                 placeholder='Name'
        //                 id="nombre"
        //                 value={inputNombre}
        //                 onChange={handleInputNombre}
        //             />
        //         </div>

        //         <div>
        //             <label htmlFor="correo" >Correo</label>
        //             <input 
        //                 type="text" 
        //                 name="correo"
        //                 placeholder='Correo'
        //                 id="correo"
        //                 value={inputCorreo}
        //                 onChange={handleInputCorreo}
        //             />
        //         </div>

        //         <button type="submit">Enviar</button>
        //     </form>
        // </div>
    )
}

export default Formulario
