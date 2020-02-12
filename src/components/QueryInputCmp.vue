<template>
    <form @submit.prevent="onSubmitData">
        <div id="content">
            <div class="row">
                <p class="col-12 lead">Explizite Auswahl einer Immobilie:</p>
                <div class="col-12 col-md-5">
                    <label>POST-ID</label>
                    <input type="text" class="form-control"
                           v-model="formData.post_id"/>
                </div>
                <div class="d-none d-md-block col-2">
                    <br><br>
                    --- ODER ---
                </div>
                <div class="col-12 col-md-5">
                    <label>Objektnummer</label>
                    <input type="text" class="form-control"
                           v-model="formData.object_nr"/>
                </div>
            </div>
            <hr>
            <div class="row">
                <p class="lead col-12">Mehrfachauswahl:</p>
                <div class="col-12 col-sm-4">
                    <label>Anzahl Immobilien / Seite</label>
                    <input type="number" class="form-control"
                           v-model="formData.anzahl"/>
                </div>
                <div class="col-12 col-sm-4">
                    <label>Sortierung</label>
                    <select class="form-control" v-model="formData.sorting">
                        <option value="">---</option>
                        <option value="DESC">Aufsteigend</option>
                        <option value="ASC">Absteigend</option>
                    </select>
                </div>
                <div class="col-12 col-sm-4">
                    <label>Sortiere nach</label>
                    <select class="form-control" v-model="formData.sortby">
                        <option value="">---</option>
                        <option value="ID">ID</option>
                        <option value="Author">Autor</option>
                        <option value="Title">Titel</option>
                        <option value="Name">Name</option>
                        <option value="type">TYP</option>
                        <option value="date">Datum</option>
                        <option value="modified">Letzte Aktualisierung</option>
                        <option value="rand">Zufällig</option>
                        <option value="comment_count">Anzahl Kommentare</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-sm-4">
                    <label>Vermarktungsart</label>
                    <select class="form-control" v-model="formData.vermarktung" size="5" multiple>
                        <option value="">---</option>
                        <option value="kauf">Kauf</option>
                        <option value="miete_pacht">Miete / Pacht</option>
                        <option value="erbpacht">Erbpacht</option>
                        <option value="leasing">Leasing</option>
                    </select>
                </div>
                <div class="col-12 col-sm-4">
                    <label>Objekttyp</label>
                    <select class="form-control" v-model="formData.objekttyp" size="5" multiple>
                        <option value="">---</option>
                        <option value="zimmer">Zimmer</option>
                        <option value="wohnung">Wohnung</option>
                        <option value="haus">Haus</option>
                        <option value="grundstueck">Grundstück</option>
                        <option value="buero_praxen">Büros / Praxen</option>
                        <option value="einzelhandel">Einzelhandel</option>
                        <option value="gastgewerbe">Gastgewerbe</option>
                        <option value="hallen_lager_prod">Hallen / Lager</option>
                        <option value="land_und_forstwirtschaft">Land und Forstwirtschaft</option>
                        <option value="parken">Parken</option>
                        <option value="sonstige">Sonstige</option>
                        <option value="freizeitimmobilie_gewerblich">Gewerbliche Freizeitimmobilien</option>
                        <option value="zinshaus_renditeobjekt">Zinshaus / Renditeobjekt</option>
                    </select>
                </div>
                <div class="col-12 col-sm-4">
                    <label>Verknüpfung</label>
                    <select class="form-control" v-model="formData.relation">
                        <option value="">---</option>
                        <option value="AND">UND</option>
                        <option value="OR">ODER</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-md-5">
                    <label>Meta enthalten</label>
                    <select class="form-control" v-model="formData.meta_in">
                        <option value="">---</option>
                        <option value="sold">Verkauft / Vermietet</option>
                    </select>
                </div>
                <div class="d-none d-md-block col-md-2">
                    <br><br>
                    --- ODER ---
                </div>
                <div class="col-12 col-md-5">
                    <label>Meta ausschließen</label>
                    <select class="form-control" v-model="formData.meta_not">
                        <option value="">---</option>
                        <option value="sold">Verkauft / Vermietet</option>
                    </select>
                </div>
                <p class="col-12 alert alert-info"
                   v-if="formData.post_id || formData.object_nr">
                    Hinweis: Um die Mehrfachauswahl zu nutzen muss Post-ID und Objektnummer leer sein!
                </p>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-md-7">
                    <label>Style wählen</label>
                    <select class="form-control" v-model="formData.style">
                        <option value="">---</option>
                        <option value="excerpt">Excerpt</option>
                        <option value="list">Liste</option>
                        <option value="div">Hardfacts</option>
                        <option value="two-col-list">2 Spalten Row (Modern)</option>
                        <option value="column">3 Spalten Row (Columns)</option>
                        <option value="thumbnail">Thumbnails</option>
                    </select>
                </div>
                <div class="col-12 col-md-5">
                    <button @click="onResetData"
                            type="reset" class="btn btn-outline-warning float-right">Reset
                    </button>
                    <button type="submit" class="btn btn-outline-info float-right">Übernehmen</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { eventBus } from '../eventBus'

export default {
  'name': 'QueryInputCmp',
  'data': function () {
    return {
      'formData': {
        'post_id': '',
        'object_nr': '',
        'anzahl': '',
        'sorting': '',
        'sortby': '',
        'vermarktung': [],
        'objekttyp': [],
        'relation': '',
        'meta_in': '',
        'meta_not': '',
        'style': ''
      },
      'result': {}
    }
  },
  'methods': {
    'onSubmitData': function (event) {
      let result = {}
      // only id or objectnumber
      if (this.formData.object_nr.length) {
        result.object_nr = `object_nr=${this.formData.object_nr}`
      } else if (this.formData.post_id.length) {
        result.id = `id=${this.formData.post_id}`
      } else {
        // all ather multiselect items
        result.anzahl = this.formData.anzahl.length ? `anzahl=${this.formData.anzahl}` : null
        result.sorting = this.formData.sorting.length ? `sort=${this.formData.sorting}` : null
        result.sortby = this.formData.sortby.length ? `sortby=${this.formData.sortby}` : null
        result.vermarktung = this.formData.vermarktung.length ? `vermarktung=${this.formData.vermarktung}` : null
        result.objekttyp = this.formData.objekttyp.length ? `objekttyp=${this.formData.objekttyp}` : null
        result.relation = this.formData.relation.length ? `relation=${this.formData.relation}` : null
        result.meta_in = this.formData.meta_in.length ? `meta_in=${this.formData.meta_in}` : null
        result.meta_not = this.formData.meta_not.length ? `meta_not=${this.formData.meta_not}` : null
      }
      // global set of style
      result.style = this.formData.style.length ? `style=${this.formData.style}` : null
      this.result = result

      eventBus.onQueryInput(this.result)
    },
    onResetData: function (event) {
      event.preventDefault()
      for (const key in this.formData) {
        if (key === 'vermarktung' || key === 'objekttyp') {
          this.formData[key] = []
        } else {
          this.formData[key] = ''
        }
      }
      this.onSubmitData(event)
    }
  }
}
</script>

<style scoped>
    #content {
        width: 100%;
    }

    .btn {
        margin: 2.5rem 0 0 15px;
    }

</style>
