
const makeNilai = (data) => {
    let html = ''
            if(data.length !=0){
                data.forEach(element => {
                html += '<div class="col-lg-6 col-sm-12 col-md-6">'
                html += '<div class="card mb-4" style="border-radius:10px;" >'
                html += '<div class="card-body d-flex ">'
                html += `<img class="rounded-circle mr-3" width="50" height="50" src="`+element.thumb_path+`" >`
                html += '<div>'
                html += '<h5 class="card-title">'+element.title+'</h5>'
                html += '<h6 class="card-subtitle mb-2 text-muted">'+element.deskripsi+'</h6>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                });

            }else{
                html += '<div class="w-100 d-flex flex-column justify-content-center align-items-center py-5">'
                html += '<img class="mt-4" src="{{ asset(`assets/images/thum/gallery.png`) }}" alt="">'
                html += '<p class="text-secondary">Tidak ada data</p>'
                html += '</div>'
            }
            $('#cardNilai').html(html)
}

const makeBerita= (data) =>{
        let html = ''
        if(data.length !=0){
            data.forEach(element => {
            html += '<div class="col-lg-4 col-sm-12 col-md-4">'
            html += '<div class="card mb-4" style="border-radius:10px;" >'
            html += `<img class="card-img-top" height="300px" style="object-fit:cover;"  src="`+element.image_path+`">`
            html += '<div class="card-body" style="height:300px;" >'
            html += '<h5 class="card-title">' + element.judul +' </h5>'
            html += '<p class="card-subtitle mb-2 text-muted">'+element.deskripsi.substr(0,100)+'... </p>'
            let slug = element.judul.toString().toLowerCase()
                    .replace(/^-+/, '')
                    .replace(/-+$/, '')
                    .replace(/\s+/g, '-')
                    .replace(/\-\-+/g, '-')
                    .replace(/[^\w\-]+/g, '')
            html += `<a href="/berita/`+element.id+`/`+slug+`" style="color:#069550; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "><u>Read More</u></a>`
            html += '</div>'
            html += '</div>'
            html += '</div>'
            });
            html += `<div class="d-flex mt-3 justify-content-center" style="width:100%"><button id="buttonShowBerita" onclick="showBerita()" class="btn btn-outline-success " style="border-radius: 50px">Lihat Semua</button></div>`
        }else{
            html += '<div class="w-100 d-flex flex-column justify-content-center align-items-center py-5">'
            html += '<img class="mt-4" src="{{ asset(`assets/images/thum/gallery.png`) }}" alt="">'
            html += '<p class="text-secondary">Tidak ada data</p>'
            html += '</div>'
        }
        $('#galeriBerita').html(html)
}
function showBerita(){
    let data = beritaFull
        let html = ''
        if(data.length !=0){
            data.forEach(element => {
            html += '<div class="col-lg-4 col-sm-12 col-md-4">'
            html += '<div class="card mb-4" style="border-radius:10px;" >'
            html += `<img class="card-img-top" height="300px" src="`+element.image_path+`">`
            html += '<div class="card-body" style="height:300px;" >'
            html += '<h5 class="card-title">' + element.judul +' </h5>'
            html += '<p class="card-subtitle mb-2 text-muted">'+element.deskripsi.substr(0,100)+'... </p>'
            let slug = element.judul.toString().toLowerCase().replace(/^-+/, '')
            .replace(/-+$/, '')
            .replace(/\s+/g, '-')
            .replace(/\-\-+/g, '-')
            .replace(/[^\w\-]+/g, '');
            html += `<a href="/berita/`+element.id+`/`+slug+`" style="color:#069550; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "><u>Read More</u></a>`
            html += '</div>'
            html += '</div>'
            html += '</div>'
            });
            html += `<div class="d-flex justify-content-center mt-3" style="width:100%"><button id="buttonHideBerita" onclick="hideBerita()" class="btn btn-outline-success " style="border-radius: 50px">Show Less</button></div>`
        }else{
            html += '<div class="w-100 d-flex flex-column justify-content-center align-items-center py-5">'
            html += '<img class="mt-4" src="{{ asset(`assets/images/thum/gallery.png`) }}" alt="">'
            html += '<p class="text-secondary">Tidak ada data</p>'
            html += '</div>'
        }
        $('#galeriBerita').html(html)
}
function hideBerita(){
    let beritaData = beritaFull.slice(0,3)
    makeBerita(beritaData)
}