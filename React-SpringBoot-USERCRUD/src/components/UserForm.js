import React, { useEffect, useState } from "react";
import "./User.css";

export default function UserForm({ onSave, editing, onCancel }) {
    const [form, setForm] = useState({
        nom: "",
        email: "",
        age: ""
    });

    useEffect(() => {
        if (editing) {
            setForm({
                id: editing.id,
                nom: editing.nom || "",
                email: editing.email || "",
                age: editing.age ?? ""
            });
        } else {
            setForm({ nom: "", email: "", age: "" });
        }
    }, [editing]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        onSave({
            ...form,
            age: form.age === "" ? null : Number(form.age)
        });

        if (!editing) setForm({ nom: "", email: "", age: "" });
    };

    return (
        <div className="form-card fade-in"> {/* Added fade-in animation class */}
            <h3>{form.id ? "Modifier l'utilisateur" : "Ajouter un nouvel utilisateur"}</h3>

            <form onSubmit={submit} className="form-container">
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                        id="nom"
                        type="text"
                        name="nom"
                        placeholder="Entrez le nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        aria-describedby="nom-help"
                    />
                    <small id="nom-help" style={{ color: "#6b7280", fontSize: "0.8rem" }}>
                        Champ obligatoire
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Entrez l'email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-describedby="email-help"
                    />
                    <small id="email-help" style={{ color: "#6b7280", fontSize: "0.8rem" }}>
                        Format email requis
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Âge</label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        placeholder="Âge (optionnel)"
                        value={form.age}
                        onChange={handleChange}
                        min="0"
                        aria-describedby="age-help"
                    />
                    <small id="age-help" style={{ color: "#6b7280", fontSize: "0.8rem" }}>
                        Laisser vide si inconnu
                    </small>
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn btn-save">
                        <span style={{ marginRight: "5px" }}>💾</span>
                        {form.id ? "Enregistrer les modifications" : "Ajouter l'utilisateur"}
                    </button>

                    {form.id && (
                        <button
                            type="button"
                            className="btn btn-cancel"
                            onClick={onCancel}
                            aria-label="Annuler la modification"
                        >
                            <span style={{ marginRight: "5px" }}>✖</span>
                            Annuler
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}