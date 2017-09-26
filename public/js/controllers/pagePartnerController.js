function pagePartnerController(partnerService, $routeParams, $location, $timeout) {

    this.partnerService = partnerService;
    this.filter = '';

    this.$location = $location;
    this.$routeParams = $routeParams;

    console.log(this.$location.path());
    console.log(this.$routeParams);
    console.log(this.$routeParams.id);

    this.index = this.$routeParams.id-1;
    console.log(this.index);

    this.pagePartner = this.partner[this.index];
    console.log(this.pagePartner);


    this.load = () => {
        this.partnerService.getOne().then((res) => {
            this.partners = res.data;
            $(".button-collapse").sideNav();
        });
    };

    this.load();
    $(document).ready(function() {});
}
