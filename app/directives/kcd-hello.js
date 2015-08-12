export default ngModule => {
    if(ON_TEST){
        require('./kcd-hello.test')(ngModule);
    }
    ngModule.directive('kcdHello', kcdHello)
}

function kcdHello($log){
    require('./kcd-hello.styl');
    return {
        restrict:'E',
        scope:{},
        template: require('./kcd-hello.html'),
        controllerAs:'vm',
        controller:function() {
            const vm = this;
            vm.greeting = "hello";
            $log.info(vm.greeting);
        }
    };
}