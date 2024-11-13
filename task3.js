class Notebook {
    constructor(name, k) {
        this.name = name;        
        this.k = k;                 
    }

    cost() {
        return 15 * this.k;
    }
}

class GeneralNotebook extends Notebook {
    constructor(name, k, coverMaterial) {
        super(name, k);            
        this.coverMaterial = coverMaterial;   
    }

    cost() {
        return super.cost() + 50;
    }
}

function calculateCost(isGeneral) {
    let resultHtml = '';  

    if (isGeneral) {
        const name = document.getElementById("name2").value;
        const k = parseInt(document.getElementById("k2").value);
        const coverMaterial = document.getElementById("coverMaterial").value;

        if (!name || !coverMaterial || isNaN(k) || k <= 0) {
            resultHtml = `<span style="color: red;">Будь ласка, введіть коректні дані для зошита з обкладинкою.</span>`;
        } else {

            const generalNotebook = new GeneralNotebook(name, k, coverMaterial);

            resultHtml = `
                <strong>Назва зошита:</strong> ${generalNotebook.name} <br>
                <strong>Кількість аркушів:</strong> ${generalNotebook.k} <br>
                <strong>Матеріал обкладинки:</strong> ${generalNotebook.coverMaterial} <br>
                <strong>Вартість зошита з обкладинкою:</strong> ${generalNotebook.cost()} грн
            `;
        }

        document.getElementById("resultGeneralNotebook").innerHTML = resultHtml;

    } else {
        const name = document.getElementById("name1").value;
        const k = parseInt(document.getElementById("k1").value);

        if (!name || isNaN(k) || k <= 0) {
            resultHtml = `<span style="color: red;">Будь ласка, введіть коректні дані для звичайного зошита.</span>`;
        } else {

            const notebook = new Notebook(name, k);

            resultHtml = `
                <strong>Назва зошита:</strong> ${notebook.name} <br>
                <strong>Кількість аркушів:</strong> ${notebook.k} <br>
                <strong>Вартість звичайного зошита:</strong> ${notebook.cost()} грн
            `;
        }
        document.getElementById("resultNotebook").innerHTML = resultHtml;
    }
}
