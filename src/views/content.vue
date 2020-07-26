<template >
  <div>
    <section class="block">
      <div class="block__list" v-for="(item,index) in grids " :key="index" @click="addClass(index)">
        <div :class="{'mark-circle':item==1,'mark-check':item==-1}"></div>
      </div>
    </section>

    <section class="surprise" v-if="over">
      <div class="over">
        <h3 class="over__text">{{winnerText}}</h3>
        <button v-if="over" @click="restart()" class="over__btn">Restart</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      change: 0, // 0=O , 1=X
      count: 0, // 次數,
      over: false,
      grids: [null, null, null, null, null, null, null, null, null],
      winnerMethod: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      winnerText:''
    };
  },
  computed: {},
  methods: {
    addClass(index) {
      if (this.grids[index] == null) {
        if (this.change == 0) {
          this.$set(this.grids, index, 1);
          this.change = 1;
        } else {
          this.$set(this.grids, index, -1);
          this.change = 0;
        }
        this.count += 1;
        this.checkWinner();
      }
    },
    checkWinner() {
      if (this.count < 5) {
        return;
      }
      if (this.count == 9) {
        this.over = true;
        this.winnerText='Tie'
      }
      for (let i = 0; i < 8; i++) {
        let checkList = this.winnerMethod[i];
        let [a, b, c] = checkList;

        let sum = this.grids[a] + this.grids[b] + this.grids[c];
        if (sum === 3 || sum === -3) {
          setTimeout(() => {
            this.over = true;
            if(this.change==0){
                this.winnerText="winner is 'X' "
            }else{
                this.winnerText="winner is 'O' "
            }
          }, 100);
        }
      }
    },
    restart() {
      this.grids = this.grids.map((item, index) => {
        this.$set(this.grids, index, null);
      });
      this.over = false;
      this.count = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.block {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  height: 450px;
  @media screen and (max-width: 600px) {
    width: 70vw;
    height: 70vw;
  }
  &__list {
    width: calc(33% - 1.5px);
    height: calc(33% - 1px);
    border: 1px solid;
    position: relative;
  }
}
.mark-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 5px solid #4990c4;
  width: 50px;
  height: 50px;
}
.mark-check {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 5px;
    width: 50px;
    top: 50%;
    left: 50%;
    background: red;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(315deg);
  }
}
.surprise {
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  opacity: 0.92;
  position: absolute;
  top: 0;
}
.over {
  position: absolute;
  width: 600px;
  @media screen and (max-width: 600px) {
    width: 80vw;
    left: 50%;
    transform: translate(-50%,-50%);

  }
  left: calc((100vw - 600px) / 2);
  height: 200px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__text {
    text-align: center;
    margin: 20px 0 70px 0;
  }
  &__btn {
    padding: 10px 25px;
    border-radius: 15px;
    border: 1px solid;
    color: #4990c4;
    transition: all 0.2s;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: #4990c4;
      color: white;
      border: 1px solid;
    }
  }
}
</style>