import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useEffect, useState,createRef } from 'react'
import env from "react-dotenv";

const form_data = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  age:'',
}

export default function CardForm(props) {
  const [student,setStudent] = useState(form_data)
  const [saved,setSaved] = useState(false)  
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Realizar la solicitud Axios a /admin/user
    if(props.id !== 0){

        axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${props.id}`, data)
          .then((response) => {
            // Manejar el éxito (puedes redirigir o mostrar un mensaje de éxito)
            console.log("Formulario enviado exitosamente", response.data);
            setSaved(true);

            setTimeout(()=>{
              setSaved(false);
            },3000)

          })
          .catch((error) => {
            // Manejar el error (puedes mostrar un mensaje de error)
            console.error("Error al enviar el formulario", error);
          });
    }else{
      axios.post(`${process.env.REACT_APP_API_URL}/api/users/${props.idStudent}`, data)
          .then((response) => {
          // Manejar el éxito (puedes redirigir o mostrar un mensaje de éxito)
          console.log("Formulario enviado exitosamente", response.data);
          
          setSaved(true);

          
          setTimeout(()=>{
            setSaved(false);
          },3000)
        
          })
          .catch((error) => {
            // Manejar el error (puedes mostrar un mensaje de error)
            console.error("Error al enviar el formulario", error);
          });

    }      
  };

  useEffect(() => {
    
    const loadStudent = (id) => {
      
      axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/get/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setValue('firstName',response.data.data.firstName)
        setValue('lastName',response.data.data.lastName)
        setValue('age_student',response.data.data.age_student)
        setValue('email',response.data.data.email)
        setValue('username',response.data.data.username)
        setValue('password',response.data.data.password)
        setValue('userRole','student')

        



      })
      .catch((error) => {
        console.log(error)
    
      })
 

    }
    
    console.log("student ",props.id)
    if(props.id !== undefined){
      loadStudent(props.id)
    }

  }, [props.id])


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">{props.id == 0 ? 'Registro de estudiante' : 'Editar de estudiante'}</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Guardar información
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              
              {saved && (              
              <div className="py-4 align-center">
              <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
                    <span className="text-xl inline-block mr-5 align-middle">
                      <i className="fas fa-save pr-4"></i>
                    </span>
                    <span className="inline-block align-middle mr-8">
                      <b className="capitalize">Estudiante guardado correctamente.</b> 
                    </span>
                    <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-4 outline-none focus:outline-none">
                      <span>×</span>
                    </button>
                  </div>
              </div>
              )}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información Básica
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="firstName"
                  >
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    defaultValue={student.firstName}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    {...register("firstName", { required: "Este campo es obligatorio" })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>
                  )}
                </div>
              </div>
              {/* Repite este patrón para otros campos de entrada */}
            </div>


            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    defaultValue={student.lastName}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    {...register("lastName", { required: "Este campo es obligatorio" })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              {/* Repite este patrón para otros campos de entrada */}
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="age"
                  >
                    Edad
                  </label>
                  <input
                    type="text"
                    defaultValue={student.age_student}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.age ? "border-red-500" : ""
                    }`}
                    {...register("age_student", { required: "Este campo es obligatorio" })}
                  />
                  {errors.age && (
                    <p className="text-red-500 text-xs italic">{errors.age_student.message}</p>
                  )}
                </div>
              </div>
              {/* Repite este patrón para otros campos de entrada */}
            </div>
            

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Informacion de acceso
            </h6>
            
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    type="text"
                    defaultValue={student.username}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.username ? "border-red-500" : ""
                    }`}
                    {...register("username", { required: "Este campo es obligatorio" })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs italic">{errors.username.message}</p>
                  )}
                </div>
              </div>
              {/* Repite este patrón para otros campos de entrada */}
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    defaultValue={student.password}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    {...register("password", { required: "Este campo es obligatorio" })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                  )}
                </div>
              </div>
              {/* Repite este patrón para otros campos de entrada */}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
       
        </div>
        </form>
      </div>
    </>
  );
}
