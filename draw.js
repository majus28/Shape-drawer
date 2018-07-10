$(document).ready(function () {
    var baseUrl = 'https://drawer.test/api/';
    var rectShape = ['square', 'rectangle'];
    var sidesShape = ['pentagon', 'hexagon', 'heptagon', 'octagon', 'equilateral triangle'];
    var textBox = $('#textBox');
    var errorDiv = $('#error');
    var Xcenter = 250,
        Ycenter = 250;
    var canvas;
    /**
     * get api response from Drawer backed
     */
    $('#submitBtn').click(function () {
        if (!textBox.val().trim()) {
            textBox.addClass('is-invalid');
        } else {
            var data = {
                text: textBox.val()
            };
            $.ajax({
                url: baseUrl + 'draw',
                method: 'POST',
                data: data,
                success: function (data) {
                    errorDiv.addClass('d-none');
                    drawShape(data) // success callback
                },
                error: function (error) {
                    handleError(error); // error callback
                }
            })
        }
    });

    /**
     * @param data
     * draw shape from api response
     */
    function drawShape(data) {
        canvas = document.getElementById("myCanvas");
        canvas.width = $('.container').width();
        canvas.height = 1500;
        var ctx = canvas.getContext("2d");
        //find shape and call relative function
        if (data.shape === 'circle') {
            ctx = drawCircle(data, ctx);
        } else if (rectShape.indexOf(data.shape) >= 0) {
            ctx = drawRect(data, ctx);
        } else if (sidesShape.indexOf(data.shape) >= 0) {
            ctx = drawPoly(data, ctx);
        } else if (data.shape === 'parallelogram') {
            ctx = drawParallelogram(data, ctx);
        } else if (data.shape === 'isosceles triangle') {
            ctx = drawTriangle(data, ctx);
        } else if (data.shape === 'oval') {
            ctx = drawOval(data, ctx);
        }
        // finish canvas
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = '#343a40';
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
        $('#myCanvas').removeAttr('style').hide().fadeIn();
    }

    /**
     * @param data
     * @param ctx
     * @returns {*}
     * Draw Poly type shapes
     */
    function drawPoly(data, ctx) {
        var opt = options(0, 0);
        var numberOfSides = data.sides,
            size = data.size.length ? parseInt(data.size.length) : 100;
        Xcenter = size + opt.centerX;
        Ycenter = size + opt.centerY;
        var rotateAngle = data.rotateAngle ? parseInt(data.rotateAngle) : 0;
        ctx.beginPath();
        // draw polygon
        polygon(ctx, Xcenter, Ycenter, size, numberOfSides, rotateAngle);
        return ctx;
    }

    /**
     *
     * @param ctx
     * @param x
     * @param y
     * @param radius
     * @param sides
     * @param rotateAngle
     * @returns {*}
     */
    function polygon(ctx, x, y, radius, sides, rotateAngle) {
        if (sides < 3) return;
        var a = (Math.PI * 2) / sides;
        ctx.translate(x, y);
        ctx.rotate(rotateAngle);
        ctx.moveTo(radius, 0);
        for (var i = 1; i < sides; i++) {
            ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
        }
        return ctx;
    }

    /**
     * @param data
     * @param ctx
     * @returns {*}
     * Draw Rect shape
     */
    function drawRect(data, ctx) {
        var opt = options(0, 0);
        var width = data.size.width ? parseInt(data.size.width) : (data.shape === 'square' ? 100 : 200),
            height = data.size.height ? parseInt(data.size.height) : 100;
        ctx.rect(opt.centerX, opt.centerY, width, height);
        return ctx;
    }

    /**
     * @param data
     * @param ctx
     * @returns {*}
     * Circle
     */
    function drawCircle(data, ctx) {
        var radius = data.size.radius;
        var opt = options(radius, radius);
        ctx.beginPath();
        ctx.arc(opt.centerX, opt.centerY, radius, 0, 2 * Math.PI);
        return ctx;
    }

    /**
     * finding X, Y
     * @param width
     * @param height
     * @returns {{centerX: *, centerY: *}}
     */
    function options(width, height) {
        return {
            centerX: width,
            centerY: height
        }
    }

    /**
     *
     * @param data
     * @param ctx
     * @returns {*}
     * Parallelogram shape
     */
    function drawParallelogram(data, ctx) {
        var width = data.size.width ? parseInt(data.size.width) : 400,
            height = data.size.height ? parseInt(data.size.height) : 300;
        var opt = options(0, 0);
        var Xcenter = opt.centerX + (width / 2);
        var Ycenter = opt.centerY;
        ctx.beginPath();
        ctx.moveTo(Xcenter, Ycenter);
        ctx.lineTo((Xcenter + width), Ycenter);
        ctx.lineTo((Xcenter + (width / 2)), (Ycenter + height));
        ctx.lineTo((Xcenter - (width / 2)), (Ycenter + height));
        ctx.lineTo(Xcenter, Ycenter);
        ctx.stroke();
        return ctx;
    }

    /**
     *
     * @param data
     * @param ctx
     * @returns {*}
     */
    function drawOval(data, ctx) {
        var w = parseInt(data.size.width);
        var h = parseInt(data.size.height);
        var x = 10;
        var y = 10;
        var kappa = .5522848,
            ox = (w / 2) * kappa, // control point offset horizontal
            oy = (h / 2) * kappa, // control point offset vertical
            xe = x + w,           // x-end
            ye = y + h,           // y-end
            xm = x + w / 2,       // x-middle
            ym = y + h / 2;       // y-middle
        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        return ctx;
    }

    /**
     * @param data
     * @param ctx
     * @returns {*}
     */
    function drawTriangle(data, ctx) {
        var width = data.size.width ? parseInt(data.size.width) : 400,
            height = data.size.height ? parseInt(data.size.height) : 300;
        ctx.beginPath();
        Xcenter = 40;
        Ycenter = 40;
        ctx.moveTo(Xcenter, Ycenter);
        ctx.lineTo(Xcenter, (Ycenter + height));
        ctx.lineTo((Xcenter + width), (Ycenter + height));
        ctx.lineTo(Xcenter, Ycenter);
        ctx.stroke();
        return ctx;
    }

    /**
     * @param error
     */
    function handleError(error) {
        var errorDiv = $('#error');
        if (error.responseJSON.message) {
            var text = error.responseJSON.message.size;
            errorDiv.removeClass('d-none');
            errorDiv.text(text ? text : 'There was an error');
        }
    }
});