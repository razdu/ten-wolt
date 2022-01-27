$('[data-role="cSave"]').on("click", () => {
    let name = $('[data-role="cName"]').val();
    let phone = $('[data-role="cPhone"]').val();
    let address = $('[data-role="cAddress"]').val();
    let vip = $('[data-role="vip"]').is("checked");
    $.post("/addClient", { name, phone, address, vip }, (data) => {
        console.log(data);
    });
});
