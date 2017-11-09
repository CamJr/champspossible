function pagePartnerController(partnerService, $routeParams, $location, $timeout) {

  this.$location = $location;
  this.$routeParams = $routeParams;

  this.partnerService = partnerService;
  this.filter = '';

  console.log(this.$location.path());
  console.log(this.$routeParams);
  console.log(this.$routeParams.id);

  this.index = this.$routeParams.id;
  console.log(this.index);


  this.load = () => {
    this.partnerService.getAll().then((res) => {
      this.partners = res.data;
      $(".button-collapse").sideNav();
    });
  };

  this.load();
  $(document).ready(function() {});
  this.pagePartner = this.partner[this.index];
  console.log(this.pagePartner);

}
