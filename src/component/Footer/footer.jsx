import "./footer.css"
const Footer =() => {
    return(
         <footer>
            <div className="footerText">
                <div className="resourch">
                    <div className="titleresourch">
                         <h3>Resourch</h3>    
                    </div>
                  
                  <div className="contentResourch">
                      <p>To do it Digital</p>
                    <p>To do it Cop</p>
                  </div>
                 
                </div>

                <div className="resourch">
                <div className="titleresourch">
                    <h3>Support</h3>
                </div>
               
               <div className="contentResourch">

                <p>About</p>
                <p>Guide</p>
                <p>Get Help</p>
                <p>Contack Us   </p>
               </div>
                </div>
            </div>

            <div className="copyright">
                <p>© To Do it 2026</p>
            </div>
         </footer>
    )
}

export default Footer