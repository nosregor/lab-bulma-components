import React from 'react';

// const FormField = ({
//   lName, iName, iType, placeholder,
// }) => (
//     <div className="field">
//       <label className="label">{lName}</label>
//       <div className="control">
//         <input className="input" type={iType} name={iName} placeholder={placeholder} />
//       </div>
//     </div>
//   );

// const FormField = (props) => {
//   return (
//     <div className="field">
//       <label className="label">{props.lName}</label>
//       <div className="control">
//         <input className="input" type={props.iType} name={props.iName} placeholder={props.placeholder} />
//       </div>
//     </div>
//   )
// }

function FormField(props) {
  return (
    <div className="field">
      <label className="label">{props.lName}</label>
      <div className="control">
        <input className="input" type={props.iType} name={props.iName} placeholder={props.placeholder} />
      </div>
    </div>
  )
}

export default FormField;
