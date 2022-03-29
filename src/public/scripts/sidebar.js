function sidebar(){
    return`
    <div id = "filter">
          <span " class="material-icons-outlined"> filter_alt </span>
          <span id="filter_ui" class="heading_5">Filters</span>
        </div>

        <form action="">
          <label for="">Category</label>
          <br>
        <select type="text" placeholder="e.g. Marketing" style="line-height: -15px;color:gray;border:1;appearance: none;"  />
          <option value="e.g. Marketing">e.g. Marketing</option>
          <option value="">.NET Development</option>
          <option>3D Printing</option>
          <option>Accounts</option>
          <option>Acting</option>
          <option>Aerospace Engineering</option>
          <option>Analytics</option>
          <option>Anchoring</option>
          <option>Android App Development</option>
          <option>Angular.js Development</option>
          <option>Animation</option>
          <option>Architecture</option>
          <option>Artificial Intelligence(AI)</option>
          <option>ASP.NET Development</option>
          <option>Audio Making/Editing</option>
        </select>
          <br>
          <label for="">Location</label>
          <br>
          <select type="text" placeholder="e.g.Delhi " style="line-height: -15px;color:gray;border:1;appearance: none;"  />
          <option value="e.g. place">e.g.Delhi </option>
          <option value="">Agra</option>
          <option>Adilabad</option>
          <option>Agar</option>
          <option>Agartala</option>
          <option>Ahmedabad</option>
          <option>Ahmadnagar</option>
          <option>Ajmer</option>
          <option>Akola</option>
          <option>Allahabad</option>
          <option>Badarpur</option>
          <option>Bahadurpur</option>
          <option>Balghat</option>
          <option>Balasore</option>
          <option>Balangir</option>
          <option>Banaras</option>
          <option>Banke</option>
          <option>Baroda</option>
          <option>Bhatinda</option>
          <option>Balamau</option>
          <option>Bangalore</option>
          <option>Delhi</option>
          <option>Hyderabad</option>
          <option>Pune</option>
          <option>Chennai</option>
          <option>Calcutta</option>
          <option>Rajasthan</option>
          <option>Mumbai</option>
          
        </select>
        <br>
        </form>
        <div id="toggle-switch">
          <label id = "text_label">Work from Home</label>
          <div class=""toggle>
          <label class="switch">
          <input id="wfh" type="checkbox" checked>
          <span class="slider_switch"></span>
          </label>
          </div>
        
        </div>
        <div id="toggle-switch">
          <label id = "text_label">Part-time</label>
          <div class=""toggle>
          <label class="switch">
          <input id="ptm" type="checkbox" checked>
          <span class="slider_switch""></span>
          </label>
          </div>
        </div>
        <div>
          <label>Desired minimum monthly stipend ( ₹ )</label>
          <input
            type="range"
            min="0"
            max="12100"
            value="5"
            step="3"
            class="slider"
            id="stipend_filter"
            style="width:100%;
            
              background: linear-gradient(
                to right,
                #dddddd 0%,
                #dddddd 0%,
                #008bdc 0%,
                #008bdc 100%
              );"
            "
          />
        </div>
        <form action="">
          <label for="">Starting from (or after)</label>
          <select type="text" placeholder="e.g.Delhi " style="line-height: -15px;color:gray;border:1;appearance: none;"  />
          <option>Date</option>
          </select>
          <br>
          <label for=""> Max. duration (months)</label>
          <select type="months" placeholder="Choose duration" style="line-height: -15px;color:gray;border:1;appearance: none;" >
          <option>Duration</option>
          </select>
        </form>
        <div>
           <div id="toggle-switch">
          <label id = "text_label">Internships for women ?</label>
          <div class=""toggle>
         <label class="switch">
          <input type="checkbox" checked>
          <span class="slider_switch"></span>
          </label>
          </div>
         </div>
        <div>
          <div>
           <div id="toggle-switch">
           <label id = "text_label">Internships with job offer ?</label>
          <div class=""toggle>
         <label class="switch">
          <input type="checkbox" checked>
          <span class="slider_switch"></span>
          </label>
          </div>
         </div>
        </div>
        <p>-------------------------  OR  ---------------------</p>
        <input type="text" placeholder="e.g. Design,Mumbai,Infosys"/>
    `
}

export {sidebar}