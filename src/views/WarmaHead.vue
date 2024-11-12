<template>
    <div v-if="!isPhone">
        <el-image
            :src="require('@/assets/head/' + head)"
            class="FunctionHead-head-image-style"
            :style="[imageTop, opacity]"
        ></el-image>
        <div
            class="FunctionHead-head-div1-style"
            :style="[divHeight, divTop1]"
        ></div>
        <div
            class="FunctionHead-head-div2-style"
            :style="[divHeight, divTop2]"
        ></div>
        <div
            class="FunctionHead-head-div3-style"
            :style="[divHeight, divTop3]"
        ></div>
        <div
            class="FunctionHead-head-div4-style"
            :style="[divHeight, divTop4]"
        ></div>
        <el-row>
            <el-col :span="12"></el-col>
            <el-col :span="9">
                <el-carousel
                    trigger="click"
                    height="100px"
                    :autoplay="false"
                    @change="carouselChange($event)"
                    :style="carouselTop"
                    class="FunctionHead-carousel-style"
                >
                    <el-carousel-item v-for="(item, i) in carousel" :key="i">
                        <h3 class="FunctionHead-carousel-text-style">
                            {{ item.text }}
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>
    <div v-if="isPhone">
        <el-image
            :src="require('@/assets/head/' + head)"
            class="phone-FunctionHead-head-image-style"
            :style="[imageTop, opacity]"
        ></el-image>
        <div
            class="FunctionHead-head-div1-style"
            :style="[divHeight, divTop1]"
        ></div>
        <div
            class="FunctionHead-head-div2-style"
            :style="[divHeight, divTop2]"
        ></div>
        <div
            class="FunctionHead-head-div3-style"
            :style="[divHeight, divTop3]"
        ></div>
        <div
            class="FunctionHead-head-div4-style"
            :style="[divHeight, divTop4]"
        ></div>
        <el-carousel
            trigger="click"
            height="100px"
            :autoplay="false"
            @change="carouselChange($event)"
            :style="carouselTop"
            class="phone-FunctionHead-carousel-style"
        >
            <el-carousel-item v-for="(item, i) in carousel" :key="i">
                <el-image
                    :src="require('@/assets/head/' + item.webp)"
                    class="FunctionHead-carousel-image-style"
                ></el-image>
                <h3 class="FunctionHead-carousel-text-style">
                    {{ item.text }}
                </h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
let divPlace = 0;

export default
{
    name: 'FunctionHead',
    data() 
    {
        return {
            isPhone: false,
            head: 'head-front.webp',
            imageTop: 'top:' + (-512) + "px;",
            carouselTop: 'top:' + (window.innerHeight) + "px;",
            divHeight: 'height:' + (window.innerHeight) + "px;",
            divTop1: 'top:' + (-(window.innerHeight) - 100) + "px;",
            divTop2: 'top:' + (-(window.innerHeight) - 100) + "px;",
            divTop3: 'top:' + (-(window.innerHeight) - 100) + "px;",
            divTop4: 'top:' + (-(window.innerHeight) - 100) + "px;",
            opacity: 'opacity: 1',
            carousel:
            [
                {
                    webp: 'head-front.webp',
                    text: '只有前面的 mua fa 辫',
                },
                {
                    webp: 'head-four.webp',
                    text: '有四条 mua fa 辫',
                },
                {
                    webp: 'head-short.webp',
                    text: 'mua fa 辫 + 短发',
                },
                {
                    webp: 'head-low.webp',
                    text: 'mua fa 辫 + 低马尾',
                },
                {
                    webp: 'head-high.webp',
                    text: 'mua fa 辫 + 高马尾',
                },
                {
                    webp: 'head-up.webp',
                    text: 'mua fa 辫 + 翘发',
                },
                {
                    webp: 'head-long.webp',
                    text: 'mua fa 辫 + 长直发',
                },
                {
                    webp: 'head-shi.webp',
                    text: 'mua fa 辫 + 诗岸式辫子',
                },
                {
                    webp: 'head-yuan.webp',
                    text: 'mua fa 辫 + 有点危险的双马尾',
                },
                {
                    webp: 'head-double.webp',
                    text: 'mua fa 辫 + 低双马尾',
                },
                {
                    webp: 'head-danger.webp',
                    text: 'mua fa 辫 + 非常危险的发型',
                },
                {
                    webp: 'head-veryshort.webp',
                    text: 'mua fa 辫 + 超短发',
                },
                {
                    webp: 'head-none.webp',
                    text: '不 要 头 发',
                },
            ],
        }
    },
    methods:
    {
        carouselChange(e) 
        {
            //判断向上还是向下 先把脑袋挡住
            if(divPlace == 0)
            {
                this.divTop1 = 'top:' + 0 + "px;"
                setTimeout( () => { this.divTop2 = 'top:' + 0 + "px;" },100)
                setTimeout( () => { this.divTop3 = 'top:' + 0 + "px;" },200)
                setTimeout( () => { this.divTop4 = 'top:' + 0 + "px;" },300)
            }
            else
            {
                this.divTop1 = 'top:' + 0 + "px;"
                setTimeout( () => { this.divTop2 = 'top:' + 0 + "px;" },100)
                setTimeout( () => { this.divTop3 = 'top:' + 0 + "px;" },200)
                setTimeout( () => { this.divTop4 = 'top:' + 0 + "px;" },300)
            }
            //挡住的过程中改变脑袋的图片
            setTimeout( () => {
                if (e == 0) 
                {
                    this.head = 'head-front.webp'
                }
                else if(e == 1)
                {
                    this.head = 'head-four.webp'
                }
                else if(e == 2)
                {
                    this.head = 'head-short.webp'
                }
                else if(e == 3)
                {
                    this.head = 'head-low.webp'
                }
                else if(e == 4)
                {
                    this.head = 'head-high.webp'
                }
                else if(e == 5)
                {
                    this.head = 'head-up.webp'
                }
                else if(e == 6)
                {
                    this.head = 'head-long.webp'
                }
                else if(e == 7)
                {
                    this.head = 'head-shi.webp'
                }
                else if(e == 8)
                {
                    this.head = 'head-yuan.webp'
                }
                else if(e == 9)
                {
                    this.head = 'head-double.webp'
                }
                else if(e == 10)
                {
                    this.head = 'head-danger.webp'
                }
                else if(e == 11)
                {
                    this.head = 'head-veryshort.webp'
                }
                else if(e == 12)
                {
                    this.head = 'head-none.webp'
                }
            },500)
            //判断向上还是向下 离开屏幕
            if(divPlace == 0)
            {
                setTimeout( () => { this.divTop1 = 'top:' + window.innerHeight + "px;" },500)
                setTimeout( () => { this.divTop2 = 'top:' + window.innerHeight + "px;" },600)
                setTimeout( () => { this.divTop3 = 'top:' + window.innerHeight + "px;" },700)
                setTimeout( () => { this.divTop4 = 'top:' + window.innerHeight + "px;" },800)
                divPlace = 1
            }
            else
            {
                setTimeout( () => { this.divTop1 = 'top:' + (-(window.innerHeight) - 100) + "px;" },500)
                setTimeout( () => { this.divTop2 = 'top:' + (-(window.innerHeight) - 100) + "px;" },600)
                setTimeout( () => { this.divTop3 = 'top:' + (-(window.innerHeight) - 100) + "px;" },700)
                setTimeout( () => { this.divTop4 = 'top:' + (-(window.innerHeight) - 100) + "px;" },800)
                divPlace = 0
            }
        }
    },
    mounted()
    {
        window.addEventListener('resize',() => {
            this.isPhone = window.innerWidth < 800
            if(this.isPhone)
            {
                this.carouselTop = 'top:' + ((window.innerHeight - 500) / 2) + "px;"
                this.imageTop = 'top:' + ((window.innerHeight - 600) / 2) + "px;"
            }
            else
            {
                this.carouselTop = 'top:' + ((window.innerHeight - 150) / 2) + "px;"
                this.imageTop = 'top:' + ((window.innerHeight - 400) / 2) + "px;"
            }
        })
    },
    created()
    {
        this.isPhone = window.innerWidth < 800
        if(this.isPhone)
        {
            this.carouselTop = 'top:' + ((window.innerHeight - 500) / 2) + "px;"
            this.imageTop = 'top:' + ((window.innerHeight - 600) / 2) + "px;"
        }
        else
        {
            this.carouselTop = 'top:' + ((window.innerHeight - 150) / 2) + "px;"
            this.imageTop = 'top:' + ((window.innerHeight - 400) / 2) + "px;"
        }
    },
}
</script>

<style>
.FunctionHead-head-image-style
{
    height: 512px;
    width: 512px;
    position: absolute;
    transition: 0.5s top ease;
}

.FunctionHead-head-div1-style
{
    background-color: #ff7f7f;
    width: 128px;
    position: absolute;
    transition: 0.5s top ease;
}

.FunctionHead-head-div2-style
{
    background-color: #ff8f8f;
    width: 128px;
    position: absolute;
    left: 128px;
    transition: 0.5s top ease;
}

.FunctionHead-head-div3-style
{
    background-color: #ff9f9f;
    width: 128px;
    position: absolute;
    left: 256px;
    transition: 0.5s top ease;
}

.FunctionHead-head-div4-style
{
    background-color: #ffafaf;
    width: 128px;
    position: absolute;
    left: 384px;
    transition: 0.5s top ease;
}

.FunctionHead-carousel-style
{
    transition: 0.5s top ease;
}

.FunctionHead-carousel-image-style
{
    margin-left: 30px;
    height: 120px;
    position: absolute;
}

.FunctionHead-carousel-text-style
{
    text-align: right;
    margin-right: 50px;
    margin-top: 35px;
}

.el-carousel__item
{
    background: pink;
    border-radius: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    box-sizing: border-box;
}

.el-carousel 
{
    --el-carousel-indicator-width: 10px;
    --el-carousel-indicator-padding-horizontal: 2px;
}




</style>