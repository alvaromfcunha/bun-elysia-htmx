import home from '@views/pages/home'

export default function homePageController() {
    const text = "Salve do Controller!"

    return home(text)
}