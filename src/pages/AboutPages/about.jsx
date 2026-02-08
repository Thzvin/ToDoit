import Footer from "../../component/Footer/footer"
import Nav from "../../component/navbar/nav"
import "./about.css"
const About = () => {
    
    return(
        <div className="containerAbout">
            <Nav>

            </Nav>

         <div className="textAbout">
            <div className="aboutcontent">
                <h1>ABOUT US</h1>
                <p>To Do It merupakan aplikasi web manajemen tugas yang dibuat untuk membantu pengguna dalam mencatat dan mengatur aktivitas harian secara digital. Aplikasi ini menyediakan fitur untuk menambahkan jadwal, mengedit deskripsi tugas, serta menandai status tugas sebagai selesai atau belum selesai.

Aplikasi ini dirancang dengan konsep sederhana namun fungsional, sehingga pengguna dapat dengan mudah mengelola daftar pekerjaan mereka dalam satu platform. Dengan adanya fitur checklist dan pengelolaan data secara real-time, To Do It membantu pengguna meningkatkan produktivitas dan mengurangi risiko lupa terhadap tugas penting.

Dengan aplikasi ini, pengguna diharapkan dapat mengatur waktu dengan lebih efektif, meningkatkan disiplin kerja, dan membangun kebiasaan produktif dalam kehidupan sehari-hari.</p>
            </div>
         </div>

        <Footer></Footer>
        </div>
    )
    
    
}

export default About