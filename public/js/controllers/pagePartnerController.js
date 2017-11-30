function pagePartnerController(partnerService, $routeParams, $location, $timeout) {

    this.partnerService = partnerService;
    this.filter = '';

    this.$routeParams = $routeParams;
    this.$location = $location;

    console.log(this.$location.path());
    console.log(this.$routeParams);
    console.log(this.$routeParams.id);

    this.index = this.$routeParams.id;
    console.log(this.index);


    this.load = () => {
        this.partnerService.getOne(this.index).then((res) => {
            this.partners = res.data;
            console.warn(this.partners);
            this.pagePartner = this.partners[this.index];
            console.log(this.pagePartner);
            $(".button-collapse").sideNav();
        });
    };

    this.load();
    $(document).ready(function() {});



}
