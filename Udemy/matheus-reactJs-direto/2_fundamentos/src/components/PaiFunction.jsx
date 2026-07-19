import FilhoFunction from "./FilhoFunction";

const PaiFunction = () => {
  const handleClick = () => {
    console.log('Clicou no botão do componente filho')
  }
  return (
    <div>
      <FilhoFunction onchildClick={handleClick} />
    </div>
  )
}

export default PaiFunction;