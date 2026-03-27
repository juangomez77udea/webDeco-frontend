import ButtonNav from '@/app/components/atoms/Buttons/ButtonNav'

const index = () => {
      return (
            <nav className="bg-transparent">
                  <div className="container flex flex-row items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                        <ButtonNav text="Inicio" icon='material-symbols-light:home-outline' href='/'/>
                        <ButtonNav text="Productos" icon='material-symbols:grid-view-outline-rounded' />
                        <ButtonNav text="Contactanos" icon='material-symbols:mail-outline-rounded' />
                  </div>
            </nav>
      )
}

export default index