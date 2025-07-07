interface IProps{
    src:string
    classname?:string
}
const IconImage = ({src,classname="w-8 h-8 "}:IProps) => {
  return (
    <img src={src} className={classname}/>
  )
}

export default IconImage