import React from 'react'

const Selectedcategory = ({ onSelectCategory }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onSelectCategory(selectedCategory);
  };




  return (
<select onChange={handleCategoryChange}>
     
<option value="all">All Categories</option>
<option value="electronics">Canapé</option>
<option value="computer">Poufs</option>
<option value="smart-home">Meuble Salon</option>
<option value="automotive">Meuble Chambre Adult</option>
<option value="baby">Meuble Chambre Enfant</option>
<option value="beauty">Meuble Cuisine</option>
<option value="personal-care">Salle de bain</option>
<option value="butcher-shop">Accessoires</option>
<option value="cafe">Meubles Jardin</option>

</select>
    )
}

export default Selectedcategory