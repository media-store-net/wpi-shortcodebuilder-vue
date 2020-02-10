<template>
  <form @submit.prevent="onSubmitData">
    <div id="content">
      <div class="row">
        <p class="col-12 lead">Explizite Auswahl einer Immobilie:</p>
        <div class="col">
          <label>POST-ID</label>
          <input type="text" class="form-control"/>
        </div>
        <div class="col">
          <label>Objektnummer</label>
          <input type="text" name="ocject_nr" class="form-control"/>
        </div>
      </div>
      <hr>
      <div class="row">
        <p class="lead col-12">Mehrfachauswahl:</p>
        <div class="col">
          <label>Anzahl Immobilien / Seite</label>
          <input type="number" class="form-control"/>
        </div>
        <div class="col">
          <label>Sortierung</label>
          <select class="form-control">
            <option>---</option>
            <option>Aufsteigend</option>
            <option>Absteigend</option>
          </select>
        </div>
        <div class="col">
          <label>Sortiere nach</label>
          <select class="form-control">
            <option>---</option>
            <option value="">ID</option>
            <option value="">Autor</option>
            <option value="">Titel</option>
            <option value="">Name</option>
            <option value="">TYP</option>
            <option value="">Datum</option>
            <option value="">Letzte Aktualisierung</option>
            <option value="">Zufällig</option>
            <option value="">Anzahl Kommentare</option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <label>Vermarktungsart</label>
          <select class="form-control">
            <option>---</option>
            <option>Kauf</option>
            <option>Miete / Pacht</option>
          </select>
        </div>
        <div class="col">
          <label>Objekttyp</label>
          <select class="form-control">
            <option>---</option>
            <option>Haus</option>
            <option>Wohnung</option>
            <option>Zimmer</option>
            <option>Grundstück</option>
            <option>Gewerbe</option>
          </select>
        </div>
        <div class="col">
          <label>Verknüpfung</label>
          <select class="form-control">
            <option>---</option>
            <option value="">UND</option>
            <option value="">ODER</option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <label>Meta enthalten</label>
          <select class="form-control">
            <option>---</option>
            <option>Verkauft / Vermietet</option>
            <option>Ort</option>
          </select>
        </div>
        <div class="col">
          <label>Meta ausschließen</label>
          <select class="form-control">
            <option>---</option>
            <option>Verkauft / Vermietet</option>
            <option>Ort</option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-outline-info btn-lg float-right">Übernehmen</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'QueryInputCmp',
  data: function () {
    return {
      formData: {}
    }
  },
  methods: {
    onSubmitData: function (event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
  #content {
    width: 100%;
  }

</style>
