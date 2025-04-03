export const fetchAgenda = async (dispact, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/moyunlimited") 
        let data = await response.json();

        if(data.detail == `Agenda "moyunlimited" doesn't exist`) {
            createAgenda();
        }

}