import React, { useState, FunctionComponent, useRef } from "react";
import "./quialification-form.scss";

const initialState = {
	FNAME: '',
	EMAIL: '',
	TEXT: '',
	NUMBER: '',
	LONGTEXT: ''
}

const DirectQualificationForm: FunctionComponent<any> = () => {
	const [clientData, setClientData] = useState(initialState)

	const [loading, setLoading] = useState(false);

	const qualificationForm : any = useRef(null);

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setClientData({ ...clientData, [name]: value });
	}

	const handleSubmit = (event: any) => {
		setLoading(true);
		event.preventDefault();
		qualificationForm.current.submit();	
	}

	return (
		<div className="quialification-form" id="capture-form">
			{/* <form id="capture" target="_blank" method="post" action="https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe"> */}
			<form ref={qualificationForm}  id="direct-qualification" method="post" onSubmit={handleSubmit} action="https://member.mailingboss.com/index.php/lists/qm01965hyn1fc/subscribe" accept-charset="utf-8" target="_self">
				<div className="form-title">
					<h6 className="emfasis">
						¡DESCUBRE LA POTENCIA QUE LE DAMOS A TU NEGOCIO!
					</h6>
					<p>
						Accede al demo que hemos preparado exclusivamente apara ti ahora.
					</p>
				</div>
				<div className="form-body">
					<div>
						<label>Nombre</label>
					</div>
					<div>
						<input type="text" name="FNAME" onChange={handleChange} className="form-control form-control-lg" placeholder="Tu nombre" required />
					</div>

					<div>
						<label>Agencia</label>
					</div>
					<div>
						<input type="text" name="TEXT" onChange={handleChange} className="form-control form-control-lg" placeholder="Nombre de tu agencia" required />
					</div>

					<div>
						<label>Email</label>
					</div>
					<div>
						<input type="email" name="EMAIL" onChange={handleChange} className="form-control form-control-lg" placeholder="Email" required />
					</div>
					<div>
						<label>Prefijo de teléfono *</label>
					</div>
					<div>
						<select className="form-control form-control-lg" placeholder="Prefijo de teléfono" name="PHONEPREFIX" id="PHONEPREFIX" title="Prefijo de teléfono" required>
							<option value="213ALGERIA">Algeria (+213)</option>
							<option value="376ANDORRA">Andorra (+376)</option>
							<option value="244ANGOLA">Angola (+244)</option>
							<option value="1264ANGUILLA">Anguilla (+1264)</option>
							<option value="1268ANTIGUABARBUDA">Antigua &amp; Barbuda (+1268)</option>
							<option value="54ARGENTINA">Argentina (+54)</option>
							<option value="374ARMENIA">Armenia (+374)</option>
							<option value="297ARUBA">Aruba (+297)</option>
							<option value="61AUSTRALIA">Australia (+61)</option>
							<option value="43AUSTRIA">Austria (+43)</option>
							<option value="994AZERBAIJAN">Azerbaijan (+994)</option>
							<option value="1242BAHAMAS">Bahamas (+1242)</option>
							<option value="973BAHRAIN">Bahrain (+973)</option>
							<option value="880BANGLADESH">Bangladesh (+880)</option>
							<option value="1246BARBADOS">Barbados (+1246)</option>
							<option value="375BELARUS">Belarus (+375)</option>
							<option value="32BELGIUM">Belgium (+32)</option>
							<option value="501BELIZE">Belize (+501)</option>
							<option value="229BENIN">Benin (+229)</option>
							<option value="1441BERMUDA">Bermuda (+1441)</option>
							<option value="975BHUTAN">Bhutan (+975)</option>
							<option value="591BOLIVIA">Bolivia (+591)</option>
							<option value="387BOSNIAHERZEGOVINA">Bosnia Herzegovina (+387)</option>
							<option value="267BOTSWANA">Botswana (+267)</option>
							<option value="55BRAZIL">Brazil (+55)</option>
							<option value="673BRUNEI">Brunei (+673)</option>
							<option value="359BULGARIA">Bulgaria (+359)</option>
							<option value="226BURKINAFASO">Burkina Faso (+226)</option>
							<option value="257BURUNDI">Burundi (+257)</option>
							<option value="855CAMBODIA">Cambodia (+855)</option>
							<option value="237CAMEROON">Cameroon (+237)</option>
							<option value="1CANADA">Canada (+1)</option>
							<option value="238CAPEVERDEISLANDS">Cape Verde Islands (+238)</option>
							<option value="1345CAYMANISLANDS">Cayman Islands (+1345)</option>
							<option value="236CENTRALAFRICANREPUBLIC">Central African Republic (+236)</option>
							<option value="56CHILE">Chile (+56)</option>
							<option value="86CHINA">China (+86)</option>
							<option value="57COLOMBIA">Colombia (+57)</option>
							<option value="269COMOROS">Comoros (+269)</option>
							<option value="242CONGO">Congo (+242)</option>
							<option value="682COOKISLANDS">Cook Islands (+682)</option>
							<option value="506COSTARICA">Costa Rica (+506)</option>
							<option value="385CROATIA">Croatia (+385)</option>
							<option value="53CUBA">Cuba (+53)</option>
							<option value="90392CYPRUSNORTH">Cyprus North (+90392)</option>
							<option value="357CYPRUSSOUTH">Cyprus South (+357)</option>
							<option value="42CZECHREPUBLIC">Czech Republic (+42)</option>
							<option value="45DENMARK">Denmark (+45)</option>
							<option value="253DJIBOUTI">Djibouti (+253)</option>
							<option value="1809DOMINICA">Dominica (+1809)</option>
							<option value="1809DOMINICANREPUBLIC">Dominican Republic (+1809)</option>
							<option value="593ECUADOR">Ecuador (+593)</option>
							<option value="20EGYPT">Egypt (+20)</option>
							<option value="503ELSALVADOR">El Salvador (+503)</option>
							<option value="240EQUATORIALGUINEA">Equatorial Guinea (+240)</option>
							<option value="291ERITREA">Eritrea (+291)</option>
							<option value="372ESTONIA">Estonia (+372)</option>
							<option value="251ETHIOPIA">Ethiopia (+251)</option>
							<option value="500FALKLANDISLANDS">Falkland Islands (+500)</option>
							<option value="298FAROEISLANDS">Faroe Islands (+298)</option>
							<option value="679FIJI">Fiji (+679)</option>
							<option value="358FINLAND">Finland (+358)</option>
							<option value="33FRANCE">France (+33)</option>
							<option value="594FRENCHGUIANA">French Guiana (+594)</option>
							<option value="689FRENCHPOLYNESIA">French Polynesia (+689)</option>
							<option value="241GABON">Gabon (+241)</option>
							<option value="220GAMBIA">Gambia (+220)</option>
							<option value="7880GEORGIA">Georgia (+7880)</option>
							<option value="49GERMANY">Germany (+49)</option>
							<option value="233GHANA">Ghana (+233)</option>
							<option value="350GIBRALTAR">Gibraltar (+350)</option>
							<option value="30GREECE">Greece (+30)</option>
							<option value="299GREENLAND">Greenland (+299)</option>
							<option value="1473GRENADA">Grenada (+1473)</option>
							<option value="590GUADELOUPE">Guadeloupe (+590)</option>
							<option value="671GUAM">Guam (+671)</option>
							<option value="502GUATEMALA">Guatemala (+502)</option>
							<option value="224GUINEA">Guinea (+224)</option>
							<option value="245GUINEABISSAU">Guinea - Bissau (+245)</option>
							<option value="592GUYANA">Guyana (+592)</option>
							<option value="509HAITI">Haiti (+509)</option>
							<option value="504HONDURAS">Honduras (+504)</option>
							<option value="852HONGKONG">Hong Kong (+852)</option>
							<option value="36HUNGARY">Hungary (+36)</option>
							<option value="354ICELAND">Iceland (+354)</option>
							<option value="91INDIA">India (+91)</option>
							<option value="62INDONESIA">Indonesia (+62)</option>
							<option value="98IRAN">Iran (+98)</option>
							<option value="964IRAQ">Iraq (+964)</option>
							<option value="353IRELAND">Ireland (+353)</option>
							<option value="972ISRAEL">Israel (+972)</option>
							<option value="39ITALY">Italy (+39)</option>
							<option value="1876JAMAICA">Jamaica (+1876)</option>
							<option value="81JAPAN">Japan (+81)</option>
							<option value="962JORDAN">Jordan (+962)</option>
							<option value="7KAZAKHSTAN">Kazakhstan (+7)</option>
							<option value="254KENYA">Kenya (+254)</option>
							<option value="686KIRIBATI">Kiribati (+686)</option>
							<option value="850KOREANORTH">Korea North (+850)</option>
							<option value="82KOREASOUTH">Korea South (+82)</option>
							<option value="965KUWAIT">Kuwait (+965)</option>
							<option value="996KYRGYZSTAN">Kyrgyzstan (+996)</option>
							<option value="856LAOS">Laos (+856)</option>
							<option value="371LATVIA">Latvia (+371)</option>
							<option value="961LEBANON">Lebanon (+961)</option>
							<option value="266LESOTHO">Lesotho (+266)</option>
							<option value="231LIBERIA">Liberia (+231)</option>
							<option value="218LIBYA">Libya (+218)</option>
							<option value="417LIECHTENSTEIN">Liechtenstein (+417)</option>
							<option value="370LITHUANIA">Lithuania (+370)</option>
							<option value="352LUXEMBOURG">Luxembourg (+352)</option>
							<option value="853MACAO">Macao (+853)</option>
							<option value="389MACEDONIA">Macedonia (+389)</option>
							<option value="261MADAGASCAR">Madagascar (+261)</option>
							<option value="265MALAWI">Malawi (+265)</option>
							<option value="60MALAYSIA">Malaysia (+60)</option>
							<option value="960MALDIVES">Maldives (+960)</option>
							<option value="223MALI">Mali (+223)</option>
							<option value="356MALTA">Malta (+356)</option>
							<option value="692MARSHALLISLANDS">Marshall Islands (+692)</option>
							<option value="596MARTINIQUE">Martinique (+596)</option>
							<option value="222MAURITANIA">Mauritania (+222)</option>
							<option value="269MAYOTTE">Mayotte (+269)</option>
							<option value="52MEXICO">Mexico (+52)</option>
							<option value="691MICRONESIA">Micronesia (+691)</option>
							<option value="373MOLDOVA">Moldova (+373)</option>
							<option value="377MONACO">Monaco (+377)</option>
							<option value="976MONGOLIA">Mongolia (+976)</option>
							<option value="1664MONTSERRAT">Montserrat (+1664)</option>
							<option value="212MOROCCO">Morocco (+212)</option>
							<option value="258MOZAMBIQUE">Mozambique (+258)</option>
							<option value="95MYANMAR">Myanmar (+95)</option>
							<option value="264NAMIBIA">Namibia (+264)</option>
							<option value="674NAURU">Nauru (+674)</option>
							<option value="977NEPAL">Nepal (+977)</option>
							<option value="31NETHERLANDS">Netherlands (+31)</option>
							<option value="687NEWCALEDONIA">New Caledonia (+687)</option>
							<option value="64NEWZEALAND">New Zealand (+64)</option>
							<option value="505NICARAGUA">Nicaragua (+505)</option>
							<option value="227NIGER">Niger (+227)</option>
							<option value="234NIGERIA">Nigeria (+234)</option>
							<option value="683NIUE">Niue (+683)</option>
							<option value="672NORFOLKISLANDS">Norfolk Islands (+672)</option>
							<option value="670NORTHERNMARIANAS">Northern Marianas (+670)</option>
							<option value="47NORWAY">Norway (+47)</option>
							<option value="968OMAN">Oman (+968)</option>
							<option value="680PALAU">Palau (+680)</option>
							<option value="507PANAMA">Panama (+507)</option>
							<option value="675PAPUANEWGUINEA">Papua New Guinea (+675)</option>
							<option value="595PARAGUAY">Paraguay (+595)</option>
							<option value="51PERU">Peru (+51)</option>
							<option value="63PHILIPPINES">Philippines (+63)</option>
							<option value="48POLAND">Poland (+48)</option>
							<option value="351PORTUGAL">Portugal (+351)</option>
							<option value="1787PUERTORICO">Puerto Rico (+1787)</option>
							<option value="974QATAR">Qatar (+974)</option>
							<option value="262REUNION">Reunion (+262)</option>
							<option value="40ROMANIA">Romania (+40)</option>
							<option value="7RUSSIA">Russia (+7)</option>
							<option value="250RWANDA">Rwanda (+250)</option>
							<option value="378SANMARINO">San Marino (+378)</option>
							<option value="239SAOTOMEPRINCIPE">Sao Tome &amp; Principe (+239)</option>
							<option value="966SAUDIARABIA">Saudi Arabia (+966)</option>
							<option value="221SENEGAL">Senegal (+221)</option>
							<option value="381SERBIA">Serbia (+381)</option>
							<option value="248SEYCHELLES">Seychelles (+248)</option>
							<option value="232SIERRALEONE">Sierra Leone (+232)</option>
							<option value="65SINGAPORE">Singapore (+65)</option>
							<option value="421SLOVAKREPUBLIC">Slovak Republic (+421)</option>
							<option value="386SLOVENIA">Slovenia (+386)</option>
							<option value="677SOLOMONISLANDS">Solomon Islands (+677)</option>
							<option value="252SOMALIA">Somalia (+252)</option>
							<option value="27SOUTHAFRICA">South Africa (+27)</option>
							<option value="34SPAIN">Spain (+34)</option>
							<option value="94SRILANKA">Sri Lanka (+94)</option>
							<option value="290STHELENA">St. Helena (+290)</option>
							<option value="1869STKITTS">St. Kitts (+1869)</option>
							<option value="1758STLUCIA">St. Lucia (+1758)</option>
							<option value="249SUDAN">Sudan (+249)</option>
							<option value="597SURINAME">Suriname (+597)</option>
							<option value="268SWAZILAND">Swaziland (+268)</option>
							<option value="46SWEDEN">Sweden (+46)</option>
							<option value="41SWITZERLAND">Switzerland (+41)</option>
							<option value="963SYRIA">Syria (+963)</option>
							<option value="886TAIWAN">Taiwan (+886)</option>
							<option value="7TAJIKSTAN">Tajikstan (+7)</option>
							<option value="66THAILAND">Thailand (+66)</option>
							<option value="228TOGO">Togo (+228)</option>
							<option value="676TONGA">Tonga (+676)</option>
							<option value="1868TRINIDADTOBAGO">Trinidad &amp; Tobago (+1868)</option>
							<option value="216TUNISIA">Tunisia (+216)</option>
							<option value="90TURKEY">Turkey (+90)</option>
							<option value="7TURKMENISTAN">Turkmenistan (+7)</option>
							<option value="993TURKMENISTAN">Turkmenistan (+993)</option>
							<option value="1649TURKSCAICOSISLANDS">Turks &amp; Caicos Islands (+1649)</option>
							<option value="688TUVALU">Tuvalu (+688)</option>
							<option value="256UGANDA">Uganda (+256)</option>
							<option value="380UKRAINE">Ukraine (+380)</option>
							<option value="44UK">UK (+44)</option>
							<option value="971UNITEDARABEMIRATES">United Arab Emirates (+971)</option>
							<option value="598URUGUAY">Uruguay (+598)</option>
							<option value="1USA">USA (+1)</option>
							<option value="7UZBEKISTAN">Uzbekistan (+7)</option>
							<option value="678VANUATU">Vanuatu (+678)</option>
							<option value="379VATICANCITY">Vatican City (+379)</option>
							<option value="58VENEZUELA">Venezuela (+58)</option>
							<option value="84VIETNAM">Vietnam (+84)</option>
							<option value="84VIRGINISLANDSBRITISH">Virgin Islands - British (+84)</option>
							<option value="84VIRGINISLANDSUS">Virgin Islands - US (+84)</option>
							<option value="681WALLISFUTUNA">Wallis &amp; Futuna (+681)</option>
							<option value="969YEMENNORTH">Yemen (North) (+969)</option>
							<option value="967YEMENSOUTH">Yemen (South) (+967)</option>
							<option value="260ZAMBIA">Zambia (+260)</option>
							<option value="263ZIMBABWE">Zimbabwe (+263)</option>
						</select>
					</div>

					<div>
						<label>Teléfono (WhatsApp)</label>
					</div>
					<div>
						<input type="tel" name="PHONE" onChange={handleChange} className="form-control form-control-lg" placeholder="Escribe Tu Whatsapp Aquí..." required />
					</div>
					<div>
						<label>Seleccione Volumen de Ventas Mensuales... *</label>
					</div>
					<div className="form-group">
						<div className="form-check">
							<label className="form-check-label clickable">
								<input type="radio" defaultChecked className="form-check-input " name="NUMBER" value="10000" onChange={handleChange} /> Menos de 10000
 							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label clickable">
								<input type="radio" className="form-check-input" name="NUMBER" value="10000-50000" onChange={handleChange} /> De 10000 a 50000
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label clickable">
								<input type="radio" className="form-check-input" name="NUMBER" value="+50000" onChange={handleChange} /> Mas de 50000
							</label>
						</div>
					</div>

					<div>
						<label>Principal Mercado</label>
					</div>
					<div>
						<textarea 
							name="LONGTEXT" 
							id="LONGTEXT" 
							rows={2}
							onChange={handleChange} 
							className="form-control form-control-lg" 
							placeholder="Escriba aquí sus principales mercados" 
							required
						>
						</textarea>
					</div>
				</div>

				<div className="form-footer">
					<div className="counter">
						
					</div>
					<div>
						<button type="submit" className={`btn-free-month-md  ${loading ? '-loading' : ''}`}>
							{
								loading ? (
									<div className="spinner-border text-light" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								) : (
									'Calificar para mes GRATIS'
								)
							}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default DirectQualificationForm;
