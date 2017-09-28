function partnerController(partnerService, $location, $timeout) {

    this.partnerService = partnerService;
    this.filter = '';

    this.card = (id) => {
      $location.path('/pagePartenaires/' + id);
    }

    this.load = () => {
        this.partnerService.getAll().then((res) => {
            this.partners = res.data;
            $(".button-collapse").sideNav();
        });
    };

    this.load();
    $(document).ready(function() {});
}
