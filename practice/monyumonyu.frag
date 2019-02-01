#ifdef GL_ES
precision mediump float;
#endif

#extension GL_ES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float dm(vec2 p){
  p = fract(p) - 0.5;

  return length(p);
}

float cell(vec2 p){
  float ang = 0.33333 * 2.0 * 3.1415926;
  mat2 m = mat2(cos(ang), sin(ang),
                -sin(ang), cos(ang));

  float offs = 0.5;
  vec2 a = sin(vec2(1.93, 0.0) + time * 0.5) * 0.766;
  float d0 = dm(p + vec2(a.x, 0.0));
  float d1 = dm(p + vec2(0.0, offs + a.y));

  p = m * (p + 0.5);
  float d2 = dm(p + vec2(a.x, 0.0));
  float d3 = dm(p + vec2(0.0, offs + a.y));

  return min(min(d0, d1), min(d2, d3));
}
