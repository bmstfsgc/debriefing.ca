// Field.tsx
import {FieldProps,FieldData,FormFieldLayout,FieldLayout} from "./types" 
import React from "react";


export const Field = ({
  children,
  label,
  error,
  htmlFor,
  required,
  formfieldlayout,
  fieldlayout
}: FieldProps) => {
  const id = htmlFor || getChildId(children);
 
  var type="   ";
  var label_ratio="  md:w-1/2  ";
  var field_ratio=" ";

  var formfield_ratio="";
  var rowcol_layout="";

  var className="col-sm-12 mb-3   ";
  //var fieldlayout={}
  if(formfieldlayout && formfieldlayout.hasOwnProperty("type") )
  {
      type=formfieldlayout['type'];
      if(type=="row")
      {
        rowcol_layout=" flex flex-row ";
      }
      else
      rowcol_layout=" flex flex-col ";
  }    
    
  

  if(fieldlayout && fieldlayout.hasOwnProperty("height") )
  {
      const height=fieldlayout['height'];
      rowcol_layout+="   " + height+" ";
  }    


  if(fieldlayout && fieldlayout.hasOwnProperty("ratio") )
  {
      const ratio=fieldlayout['ratio'];
      formfield_ratio+="   " + ratio+" ";
  }    

/*
  if(fieldlayout && fieldlayout.hasOwnProperty("width") )
  {
      const width=fieldlayout['width'];
      rowcol_layout+="   " + width+" ";
  }    
*/
  //if(fieldlayout.hasOwnProperty('labelpos'))

  if(formfieldlayout && formfieldlayout.hasOwnProperty('label_width_ratio'))
  {
    label_ratio=formfieldlayout['label_width_ratio'];
  }
  if(formfieldlayout && formfieldlayout.hasOwnProperty('field_width_ratio'))
  {
    field_ratio=formfieldlayout['field_width_ratio'];
  }


  type= (type==="row") ?" flex flex-col md:flex-row " :"flex  flex-col ";
  
    
  className+=type;


  //console.log(" field  :"+{label}+" : "+form_element_layout);
  return (
    <div className={ formfield_ratio }>
    <div className={className + ' px-2 ' }>
      <div className={"mt-1 form-label "+label_ratio}>
      {label && label!="blank" && (
        <label htmlFor={id} >
          {label}
          {required && "*"}
        </label>
      )}

    {label=="blank" && (
        <label htmlFor={id} >
          &nbsp;
        </label>
      )}
      </div>
      <div className={" relative "+rowcol_layout+ field_ratio + "  "}>
      {children}
      {error &&  <small className="error px-2">{error.message}</small>}
      
      </div>
    </div>
    </div>
    
  );
};
 
// Get id prop from a child element
export const getChildId = (children: FieldProps["children"]) => {
  const child = React.Children.only(children);
 
  if ("id" in child?.props) {
    return child.props.id;
  }
};