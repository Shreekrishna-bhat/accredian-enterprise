'use client';
import { useState } from 'react';

const links = [['Programs','#programs'],['Solutions','#solutions'],['Why Accredian','#edge'],['FAQs','#faq']];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="nav"><a className="brand" href="#top" aria-label="Accredian Enterprise"><span className="brand-mark">A</span><span>accredian<span className="brand-dot">.</span></span></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">☰</button><nav className={open?'nav-links open':'nav-links'}>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#enquiry" onClick={()=>setOpen(false)}>Enquire Now</a></nav></header>
}
