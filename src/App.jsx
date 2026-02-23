import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Settings, Zap, Fuel, Gauge, Box, Weight,
  MapPin, CreditCard, Activity, TrendingDown, AlertTriangle, FileText,
  Maximize, Scale, ArrowRightLeft
} from 'lucide-react';
import './App.css';
import { TRUCKS_DATA } from './data.jsx';
import logo from './assets/logo.jpg';

// RASMNI IMPORT QILISH
import taplink from './assets/taplink.jpg';

// --- 1-SAHIFA: KATALOG (ASOSIY SAHIFA) ---
const CatalogPage = () => {
  const [activeCat, setActiveCat] = useState("All");
  const navigate = useNavigate();

  const filteredTrucks = activeCat === "All"
    ? TRUCKS_DATA
    : TRUCKS_DATA.filter(t => t.category === activeCat);

  return (
    <div className="app-container" style={{ backgroundColor: '#fdfdfd' }}>

      {/* --- PROFESSIONAL NAVBAR --- */}
      <header style={{
        padding: '20px 0',
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        marginBottom: '10px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: "20px",
          justifyContent: 'center',
          padding: '0 20px'
        }}>
          <a href="https://uzautotrailer.uz/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
            <img
              style={{ width: "90px", height: "50px", borderRadius: "10px", boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              src={logo}
              alt="logo"
            />
          </a>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{
              margin: 0,
              color: '#0f172a',
              fontSize: '22px',
              fontWeight: '800',
              letterSpacing: '-0.5px',
              textTransform: 'uppercase'
            }}>
              КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
            </h2>
            <p style={{ margin: 0, color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>от компании UAT</p>
          </div>
        </div>
      </header>

      {/* TRUCK GRID (Katalog qismi) */}
      <div className="truck-grid">
        {filteredTrucks.map(truck => (
          <div
            className="truck-card"
            key={truck.id}
            onClick={() => navigate(`/truck/${truck.id}`)}
            style={{ backgroundColor: truck.status ? '#dcfce7' : '#fef9c3' }} // SHART SHU YERDA
          >
            <img src={truck.img} alt="img" />
            <div className="card-info"></div>
          </div>
        ))}
      </div>

      {/* --- RANG KO'RSATKICHLARI (LEGEND) --- */}
      <div style={{
        maxWidth: '100%',
        // margin: '40px auto 20px auto',
        display: 'flex',
        justifyContent: 'center',
        gap: '100px',
        alignItems: 'center',
        padding: '15px',
        background: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#dcfce7', border: '2px solid #22c55e', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px', color: '#334155', fontWeight: '600' }}>имеется в наличии</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#fef9c3', border: '2px solid #eab308', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px', color: '#334155', fontWeight: '600' }}>по заказу</span>
        </div>
        <div style={{}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: "50px",
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center', display: "flex", alignItems: "center", gap: "10px" }}>
              <p style={{ margin: '0 ', color: '#64748b', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Телефон call-центра:
              </p>
              <h3 style={{ fontSize: '15px', color: '#0f172a', margin: 0, fontWeight: '500' }}>
                <a href="tel:+998712023223" style={{ textDecoration: 'none', color: 'inherit' }}>
                  71 202 32 23
                </a>
              </h3>
            </div>
            <div style={{ height: '50px', width: '1px', backgroundColor: '#e2e8f0', display: 'none' }}></div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <img
            src={taplink}
            alt="taplink"
            style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
          />
        </div>
      </div>

    </div>
  );
};

// --- 2-SAHIFA: TRUCK DETAILS (O'ZGARISHSIZ) ---
const TruckDetails = () => {
  const { id } = useParams();
  const truck = TRUCKS_DATA.find(t => t.id === id);

  if (!truck) return <div className="app-container">Техника не найдена!</div>;

  return (
    <div className="app-containerr">

      <div className="sticky-nav">
        <Link to="/" className="back-btn">
          <ArrowLeft size={18} /> Назад в каталог
        </Link>
      </div>

      <div className="details-page">
        <div className="details-content">

          <div style={{ marginBottom: '20px', display: 'flex', gap: "30px", flexWrap: 'wrap' }}>
            <img
              src={truck.img}
              alt={truck.name}
              style={{ maxWidth: '200px', height: 'auto', objectFit: 'contain', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            />

            <div style={{ flex: 1, minWidth: '250px' }}>
              <h1 style={{ fontSize: '32px', margin: '0', color: '#0f172a' }}>{truck.name}</h1>
              <div className="card-price" style={{ fontSize: '28px', margin: '15px 0', color: '#3b82f6' }}>{truck.price}</div>
            </div>
          </div>

          <div className="spec-grid">
            {truck.engine && truck.engine !== "x" && (
              <div className="spec-card">
                <Settings size={20} color="#64748b" />
                <b>Двигатель</b> <span>{truck.engine}</span>
              </div>
            )}
            {truck.power && truck.power !== "x" && (
              <div className="spec-card">
                <Zap size={20} color="#64748b" />
                <b>Мощность</b> <span>{truck.power}</span>
              </div>
            )}
            {truck.fuel && truck.fuel !== "x" && (
              <div className="spec-card">
                <Fuel size={20} color="#64748b" />
                <b>Топливо</b> <span>{truck.fuel}</span>
              </div>
            )}
            {truck.tank && (truck.tank !== "x" || truck.category === "7") && (
              <div className="spec-card">
                <Gauge size={20} color="#64748b" />
                <b>Объем бака</b> <span>{truck.tank}</span>
              </div>
            )}
            {truck.Объем_кузова && truck.Объем_кузова !== "" && (
              <div className="spec-card">
                <Maximize size={20} color="#64748b" />
                <b>Объем кузова</b> <span>{truck.Объем_кузова}</span>
              </div>
            )}
            {truck.Масса_снаряженного_полуприцеpa && truck.Масса_снаряженного_полуприцеpa !== "" && (
              <div className="spec-card">
                <Scale size={20} color="#64748b" />
                <b>Снаряженная масса</b> <span>{truck.Масса_снаряженного_полуприцеpa}</span>
              </div>
            )}
            {truck.Масса_перевозимого_груза && truck.Масса_перевозимого_груza !== "" && (
              <div className="spec-card">
                <Weight size={20} color="#64748b" />
                <b>Масса груза</b> <span>{truck.Масса_перевозимого_груза}</span>
              </div>
            )}
            {truck.Полная_масса_полуприцеpa && truck.Полная_масса_полуприцеpa !== "" && (
              <div className="spec-card">
                <Scale size={20} color="#64748b" />
                <b>Полная масса</b> <span>{truck.Полная_масса_полуприцеpa}</span>
              </div>
            )}
            <div className="spec-card">
              <Box size={20} color="#64748b" />
              <b>Формула</b> <span>{truck.formula}</span>
            </div>

            {truck.category !== "7" && truck.load && truck.load !== "x" && (
              <div className="spec-card">
                <Weight size={20} color="#64748b" />
                <b>Грузоподъемность</b> <span>{truck.load} тн</span>
              </div>
            )}
          </div>

          <div className="extra-info-wrapper" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="info-section-item" style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1e293b' }}>
                <MapPin size={20} color="#3b82f6" /> <strong style={{ fontSize: '18px' }}>Сервис и запчасти</strong>
              </div>
              <p><strong>Наличие сервиса:</strong> {truck.Наличие_фирменного_сервиса}</p>
              <p><strong>Доступность запчастей:</strong> {truck.Доступность_ЗЧ}</p>
            </div>

            <div className="info-section-item" style={{ background: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#166534' }}>
                <CreditCard size={20} color="#22c55e" /> <strong style={{ fontSize: '18px' }}>Финансирование</strong>
              </div>
              <p>{truck.Финансирование_лизинг_рассрочка}</p>
            </div>

            <div className="info-section-item" style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1e293b' }}>
                <Activity size={20} color="#6366f1" /> <strong style={{ fontSize: '18px' }}>Эксплуатационные свойства</strong>
              </div>
              <p>{truck.Эксплуатационные_свойтва}</p>
            </div>

            <div className="info-section-item" style={{ background: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1e40af' }}>
                <TrendingDown size={20} color="#3b82f6" /> <strong style={{ fontSize: '18px' }}>Стоимость владения в год</strong>
              </div>
              <p>{truck.Стоимость_владения_в_год}</p>
            </div>

            {truck.competitors && truck.competitors.length > 0 && (
              <div style={{ marginTop: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <ArrowRightLeft size={24} color="#f59e0b" />
                  <strong style={{ fontSize: '24px', color: '#1e293b' }}>Конкуренты и сравнение</strong>
                </div>

                <div className="competitors-grid">
                  {truck.competitors.map((comp, index) => (
                    <div className="competitor-card" key={index}>
                      <div className="comp-img-placeholder">
                        {comp.imgk ? (
                          <img src={comp.imgk} alt={comp.name} />
                        ) : (
                          <span style={{ color: '#cbd5e1' }}>Нет фото</span>
                        )}
                      </div>

                      <div className="comp-main-info">
                        <h3 className="comp-title">{comp.name}</h3>
                        <div className="comp-price">{comp.price}</div>

                        <div className="comp-spec-mini">
                          <div className="comp-mini-card">
                            <b>Двигатель/Мощность</b>
                            {comp.engine} / {comp.power}
                          </div>
                          <div className="comp-mini-card">
                            <b>Топливо/Бак</b>
                            {comp.fuel} / {comp.tank}
                          </div>
                          <div className="comp-mini-card">
                            <b>Колесная формула</b>
                            {comp.formula}
                          </div>
                          <div className="comp-mini-card">
                            <b>Грузоподъемность</b>
                            {comp.load}
                          </div>
                        </div>
                      </div>

                      <div className="comp-details-text">
                        <div className="comp-text-item">
                          <strong>Сервис и запчасти:</strong>
                          {comp.Наличие_фирменного_сервиса}. {comp.Доступность_ЗЧ}
                        </div>
                        <div className="comp-text-item" style={{ background: '#f0fdf4', padding: '10px', borderRadius: '8px' }}>
                          <strong>Финансирование:</strong>
                          {comp.Финансирование_лизинг_рассрочка}
                        </div>
                        <div className="comp-text-item">
                          <strong>Эксплуатационные свойства:</strong>
                          {comp.Эксплуатационные_свойтва}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/truck/:id" element={<TruckDetails />} />
      </Routes>
    </BrowserRouter>
  );
}