
export interface FormFieldLayout { 

type:string;
label_width_ratio:string;
field_width_ratio:string;
//height?:string;
//width?:string;
}

export interface FieldLayout { 
  height:string;
  width?:string;
  ratio?:string;
 }

export interface FieldProps {
    children: React.ReactElement;
    label?: string;
    formfieldlayout?: FormFieldLayout;
    fieldlayout?: FieldLayout;
    htmlFor?: string;
    required?: boolean;
    error?: {
      message?: string;
    };
  }

export interface FieldData  {
    label: string;
    type: string;
    layout: FieldLayout;
    validation?: {
      required?: boolean;
      message?: string;
    };
    allowCustomValue?: boolean;
    options?: string[];
    placeholder?: string;
};

