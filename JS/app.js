angular
    .module('app',[])
    .controller('produtoController',produtoController);

    function produtoController($scope){
        $scope.cor={};
        $scope.cores=[];
        $scope.app="Cadastro de Cores";
    
    $scope.cadastrarCor = function(cor){
        var copiaCor = angular.copy(cor);

            coresRepetidas = $scope.cores.filter(c => c.id == cor.id);

        if(coresRepetidas.length == 0){
            $scope.cores.push(copiaCor);
        }else{
            alert("Cor com id repetido");
        }
        console.log(cor.id, cor.nome);
        $scope.cor={};
    }
      $scope.excluirCor = function(cor){
            var pos = $scope.cores.indexOf(cor);
            $scope.cores.splice(pos,1);
      }

      $scope.editarCor = function(cor){
          cor.id = prompt("Insira o novo id da cor: ",cor.id);
          cor.nome = prompt("Insira o nome da  nova cor: ",cor.nome);

          //cor.nome = prompt("Insira o novo bome da cor: ",cor.nome);
      }

    }
    
