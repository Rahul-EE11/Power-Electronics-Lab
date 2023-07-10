
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">
<h2>Introduction</h2>

Single Phase Half Wave Controlled Rectifier is a rectifier circuit which converts AC input into DC output only
for positive half cycle of the AC input supply. The word “controlled” means that, we can change the starting
point of load current by controlling the firing angle of SCR, the SCR turn ON at certain point of time when it
is forward biased.
A Single Phase Half Wave Controlled Rectifier circuit consists of SCR / thyristor, an AC voltage source and
load. The load may be purely resistive, Inductive or a combination of resistance and inductance.<br>

<b>Following points must be kept in mind while discussing controlled rectifier:</b><br>
1) The necessary condition for turn ON of SCR is that, it should be forward biased and gate signal must be
    applied. In other words, an SCR will only get turned ON when it is forward biased and fired or gated.<br>
2) SCR will only turn off when current through it reaches below holding current and reverse voltage is applied
    for a time period more than the SCR turn off time.<br>


### 1. Single Phase Half Wave Controlled Rectifier with Resistive Load

A logarithmic amplifier is an electronic circuit that produces an output that is proportional to the logarithm of the applied input. An op-amp based logarithmic amplifier produces a voltage at the output, which is proportional to the logarithm of the voltage applied to the resistor connected to its inverting terminal. The circuit diagram of op-amp based logarithmic amplifier is shown in figure 1. <br>
<center><img src="images\Rloadtheory.PNG"></center>
<center><b>Fig. 1 Single Phase Half Wave Controlled Rectifier Circuit with R load</b></center><br>

The circuit is energized by the line voltage or transformer secondary voltage, V = V<sub>max</sub> sin ωt as
shown in Fig 1. Here, V<sub>0</sub> = Load output voltage, i<sub>0</sub> = Load current and V<sub>T</sub> = Voltage across the thyristor T. It is assumed that the peak supply voltage never exceeds the forward and reverse-blocking ratings of the thyristor. The thyristor can be triggered at any angle α in the positive half cycle and thus the output voltage can be controlled. The thyristor blocks during the negative half cycle. The various voltage and current waveforms for the Single Phase Half Wave Controlled Rectifier with resistive load circuit are shown in Fig 2.<br>

<center> <img src="images\R load graph.PNG" alt="Fig. 2 :Single Phase Half Wave Controlled Rectifier Circuit with R load"></center><br>
<center><b>Fig. 2 Waveform of input voltage, firing pulse, output voltage, load current, voltage across thyristor </b></center><br>

During the positive half cycle of the supply voltage, the thyristor anode is positive w.r.t, its cathode and
until the thyristor is triggered by a proper gate pulse, it blocks the flow of load current in the forward
direction.
When the thyristor is fired at an angle α, full supply voltage (ignoring the thyristor drop V<sub>T</sub>) is
applied to the load. Thus, the load is directly connected to the ac supply. With a zero reactance source and a
purely resistive load, the current waveform after the thyristor is triggered will be identical to the applied
voltage wave and of a magnitude dependent on the amplitude of the applied voltage and the value of the load
resistance R. At zero crossing, the thyristor is turned off by natural commutation thereby switching off the
power to the load. The voltage and current are in same phase, as illustrated in Fig. 2. The angle (π – α)
during which the thyristor conducts is called the conduction angle. By varying the firing angle α, the output
voltage can be controlled. During the period of conduction, voltage drop across the thyristor is of the order
of one volt. During the negative half cycle of the supply voltage, the thyristor blocks the flow of load
current and no voltage is applied to the load R.<br>

<b>Analysis</b> : Average load voltage is given by<br>

<center>

$V_{dc} = \frac {1}{2\pi} [\int_{\alpha}^{\pi} V_{max}\, sin \, \omega t \, d(\omega t)+\int_{\pi}^{2\pi}(0)d(\omega t)]$

</center><br>

<center>

$ V_{dc} = \frac {1}{2\pi} [-V_{max} \, cos \, \omega t]_{\alpha}^{\pi} = \frac {V_{max} }{2\pi}(1+cos \alpha )........(1)$

</center>

Where, V<sub>max</sub> is peak value of the ac input voltage.
From the above Eq. (1) it is obvious that the load voltage varies with firing angle α having extremes values
for α = 0 and α = π or 180°. The maximum output voltage is obtained when α = 0 and is given by<br>

<center>

$V_{dc \;max} =\frac {V_{max}}{\pi} .......(2)$

</center>

<b>Average load current</b> with resistive load is directly proportional to the average load voltage and is given by<br>

<center>

$I_{dc} = \frac {V_{dc}}{R} = \frac {V_{max}}{2\pi R}(1+cos \alpha ).......(3)$

</center>

The rms value of load voltage is given by<br>

<center>

$V_{L rms}=\frac {V_{max}}{2 \sqrt{\pi} } (\pi -\alpha + \frac {1}{2}sin \,2 \alpha)^\frac {1}{2}.......(4)$

</center>

For firing angle α =0<br>

<center>

$V_{L \, rms} = \frac {V_{max}}{2}.......(5)$

</center>

The rms value of load current<br>

<center>

$I_{L \, rms} = \frac {V_{L \, rms}}{R} = \frac {V_{L \, rms}}{2 R \sqrt{\pi}}(\pi -\alpha + \frac {1}{2}sin \,2 \alpha)^\frac {1}{2}......(6)$

</center>

Average output power is given by <br>

<center>

$P_{dc} = V_{dc}.I_{dc} = \frac {V_{max}^2}{4 \pi^2 R}(1+ cos \alpha)^ \frac {1}{2}.......(7)$

</center><br>


### 2. Single Phase Half Wave Controlled Rectifier with RL Load

<center><img src="images\RL load.PNG " height="300"></center>
<center><b>Fig. 3 Single Phase Half Wave Controlled Rectifier Circuit with RL load</b></center><br>

The circuit diagram of a single phase half wave controlled rectifier with RL load is shown above. This circuit
consists of a thyristor T, source Vs and RL load. The output voltage is the voltage across the load and shown
as V<sub>o</sub>. Output current is the current through the load and shown as i<sub>o</sub>.
<br><br>

<center><img src="images\RL load graph.PNG" height="500"></center><br>
<center><b>Fig. 4 Waveform of input voltage, firing pulse, output voltage, load current, voltage drop across thyristor </b></center>
<br>
The waveform of source voltage, load voltage, load current and voltage across thyristor is shown above.
It is assumed that the thyristor T is fired at an angle ωt = α. As soon as the thyristor T is fired at ωt = α,
load voltage equal to the source voltage instantaneously appears across the load terminal. This is because,
the thyristor is forward biased in between ωt = 0 to α. Hence, once the thyristor is gated, it starts
conducting.<br><br>

However, the current does not start at this instant of firing. This is just because of the nature of
load. Since, the load is inductive, it will not allow any sudden change. Therefore, at ωt = α, the output
current will be zero and will gradually increase. The output current will become maximum and then start
decreasing. It should be noted here that, this behavior of load current i<sub>o</sub> will not be observed for purely
resistive load.

At ωt = π, the load voltage V<sub>o</sub> reduces to zero. However, the load current will not be zero at this
instant because of inductance L. Due to this, thyristor will not turn off, even though it is reversed biased.
Rather it will continue to conduct till ωt = β. At ωt = β, the load current becomes zero and thyristor is
reversed biased, hence it will turn off. This is a case of natural commutation.

After ωt = β, V<sub>o</sub> = 0 and i<sub>o</sub> = 0. At ωt = (2π+α), the SCR is triggered again, V<sub>o</sub> is applied to the load
and load current develops as discussed before. The angle β where the load current becomes zero is called
extinction angle and the angle (β-α) for which thyristor is ON is called conduction angle.

Carefully observe the voltage across the thyristor. The SCR is reverse biased from ωt = β to ωt = 2π.
During this period, the current through thyristor is also zero. Therefore, circuit turn off time is t<sub>c</sub> = [(2π
– β) / ω] second. This time must be greater than the thyristor turn-off time otherwise thyristor may turn on at undesired instant and will lead to commutation failure.<br>

The Voltage equation is :<br>

<center>

$V_{m}\,sin \, \omega t = Ri_0+L \frac {dI_0}{dt}$

</center>

The load current i<sub>o</sub> consist of two component, one steady state component i<sub>s</sub> and the
transient component i<sub>t</sub>. Here i<sub>s</sub> is given by<br>

<center>

$i_{s} = \frac {V_m}{\sqrt{ (R^2+X^2)}}sin(\omega t- \phi)$

</center>

The transient component i<sub>t</sub> can be obtained from force free equation<br>

<center>

$Ri_t +  L\frac{di_t}{dt} = 0$

</center>

Its solution gives,<br>

<center>

$i_t = A e^{-(\frac{R}{L})t}$

</center>

<center>

$i_o = i_s + i_t =\frac {V_m}{Z} sin(\omega t-\phi) + Ae^{-(\frac {R}{L})t} .........(8)$

</center>

Constant A can be obtained from the boundary condition at &omega;t = &alpha;. At time $t = \frac{\alpha}{\omega}$, $i_o = 0$ . Thus from equation (8)

<center>

$A = -\frac {V_m}{Z} sin(\alpha - \phi )e^{\frac {R \alpha}{L \omega}}$

</center>

 Substitution of A in Eq. (8) gives <br>

<center>

$i_o = \frac {V_m}{Z}  sin(\omega t- \phi) -\frac {V_m}{Z}sin(\alpha -\phi ) exp \{-\frac{R}{\omega L}(\omega t-\alpha )\}.......(9)$

</center>

It is also seen from waveform of i<sub>o</sub> in fig. 4 that when &omega;t = &beta;, load current i<sub>o</sub> = 0.<br>

The average voltage V<sub>o</sub> is given by<br>

<center>

$V_o = \frac {1}{2 \pi} \int_\alpha ^\beta V_m sin\, \omega t \, d(\omega t) =\frac {V_m}{2 \pi}(cos \alpha -cos \beta).......(10)$

</center>

The average load currrent I<sub>o</sub> is given by <br>

<center>

$I_o = \frac {V_m}{2 \pi R}(cos \alpha -cos \beta)$

</center>

Rms Load voltage is<br>

<center>

$V_{or} = [ \frac {1}{2 \pi } \int_\alpha ^\beta V_m^2 \, sin^2 \, \omega t.d(\omega t)]^{\frac {1}{2}}$ 

</center>

<center><br>

$V_{or} = \frac {V_m}{2 \pi} \sqrt {[(\beta - \alpha)- \frac {1}{2}(sin 2 \beta - sin 2 \alpha )]}........(11)$

</center>

### 3. Single Phase Half Wave Controlled Rectifier with RLE Load

<center><img src="images\RLE load.PNG"></center>
<center><b>Fig. 5 Single Phase Half Wave Controlled Rectifier Circuit with RLE load</b></center><br>

A Single Phase Half Wave Controlled Rectifier Circuit with RLE load is shown in Fig. 5. The counter emf E in
the load may be due to a battery or a DC motor. The minimum value of firing angle is obtained from the relation V<sub>m</sub>sin &omega;t = E, this is shown to occur at an angle &theta;<sub>1</sub> where <br>

<center>

$\theta_1 = sin^{-1}(\frac{E}{V_m}).......(12)$

</center>

In case thyristor T is fired at an angle α <&theta;<sub>1</sub>, then E > V<sub>s</sub> SCR is reversed biased
and therefore it will not turn on.
Similarly, maximum value of firing angle is &theta;<sub>2</sub> = &pi; - &theta;<sub>1</sub> in Fig. 6. During
the interval load current i<sub>o</sub> is zero, Load
voltage v<sub>o</sub>= E and during the time i<sub>o</sub> is not zero, v<sub>o</sub> follows v<sub>s</sub>
curve, KVL gives the voltage differential equation as <br>

<center>

$V_m \, sin \omega t = Ri_o + L\frac{di_o}{dt} + E.........(13)$

</center><br>

<center><img src="images\RLE graph.PNG"></center>
<center><b>Fig. 6 Voltage and current waveforms</b></center><br>

The solution of this equation is made up of two components: namely steady-state current component i<sub>s</sub> and the transient current component i<sub>t</sub>. For conveninence, i<sub>s</sub> may be thought of as the sum of i<sub>s1</sub> and i<sub>s2</sub>, Where
i<sub>s1</sub> is the steady state current due to ac source voltage acting alone and i<sub>s2</sub> is that due to dc counter emf E acting alone due to source voltage V<sub>m</sub>sin &omega;t is given by <br>

<center>

$i_{s1} = \frac{V_m}{Z} sin(\omega t-\phi)$

</center>

If only E were present, then steady state current i<sub>s2</sub> would be given by<br>

<center>

$i_{s2} = -(\frac{E}{R})$

</center><br>

The transient current i<sub>t</sub> is given by $i_t = Ae^{-(\frac{R}{L})^t}$<br>

At &omega;t = &alpha;, $i_o = 0$, i.e., at $t = \frac{\alpha}{\omega}$, $i_o = 0$.

<center>

$A = [\frac {E}{R}-\frac {V_m}{Z} sin(\alpha - \phi )]e^{-\frac{Ra}{L \omega}}$

</center>

<center>

$i_o =\frac {V_m}{Z}[sin(\omega t- \phi )-sin( \alpha - \phi)exp\{-\frac {R}{\omega L}(\omega t- \alpha )\}]-\frac {E}{R}[1-exp\{-\frac{R}{ \omega L}(\omega t- \alpha)\}].......(14)$

</center>

Equation 11 is applicable for &alpha; &le; &omega;t &ge; &beta;. The extinction angle &beta; depends upon load emf E, firing angle &alpha; and the load impedence angle &phi; the average load current $I_o$ is given by<br>

<center>

$I_o = \frac{1}{2 \pi R}[V_m(cos \alpha -cos \beta )-E(\beta-\alpha)]..........(15)$

</center>

Average load voltage V<sub>o</sub> is given by<br>

<center>

$ V_o= E+I_oR=E+ \frac {1}{2 \pi}[2V_m sin(\alpha + \frac{\gamma}{2})sin(\frac {\gamma}{2})-\gamma.E]$

</center><br>

<center>

$ V_o=E(1-\frac {\gamma} {2 \pi})+\frac {V_m} {\pi} sin(\alpha +\frac {\gamma}{2})sin(\frac {\gamma}{2})..........(16)$

</center><br>

In case &beta; is made equal to (&gamma;+&alpha;) in the above expression, Equation (15) can be obtained.
If load inductance L is zero in Fig. 5, then extinction angle &beta; = $\theta_2$ and &gamma; = &beta; - &alpha;
 = &theta;<sub>2</sub> - &alpha; but &theta;<sub>2</sub> = &pi; - &theta;<sub>1</sub>.<br>

This gives &beta; = &theta;<sub>2</sub> = &pi; - &theta;<sub>1</sub> and &gamma; = &pi; - &theta;<sub>1</sub> - &alpha;.
Putting this in Equation (15), we get average load current I<sub>o</sub> as under :<br>

<center>

$I_o = \frac {1}{ 2 \pi R}[V_m (cos \alpha +cos  \theta_1)-E( \pi - \theta_1- \alpha)].......(17)$

</center><br>

For no inductance in the load circuit, &beta; = &pi; - &alpha;. The RMS value of load current for L = 0 is obtained
as under:<br>

<center>

$I_{or}=[\frac {1}{2 \pi R^2} \int_\alpha ^{\pi-\alpha}\{(V_m sin \omega t-E)^2.d(\omega t)\}]^\frac {1}{2}.........(18)$

</center><br>

Power delivered to load<br>

<center>$ P=I^2R+I_oE.......(19)$</center><br>

<center>

Supply power factor =$I_or^2R+I_o \frac {E}{V_sI_{or}}$

</center>

### Advantages of Half-wave controlled rectifier
1. Half wave controlled rectifier is a simple circuit, We can easily construct.<br>
2. Low cost and Simple circuit with less number of components.<br>
3. Economical at initial state. Although there is a higher cost over time due to more power losses.

### Disadvantages of Half-wave controlled rectifier
1. The transformer utilization factor is low.<br>
2. They produce a low output voltage.<br>
3. DC saturation of transformer core resulting in magnetizing current and also some hysteresis losses and generation of harmonics.<br>
4. The power is delivered only during the one-half cycle of the input alternating voltage.<br>
5. Ripple factor is high, therefore required to give steady dc output.<br>

### Applications of Half-wave controlled rectifier
1. AM radio<br>
2. Pulse generated circuits<br>
3. Single demodulation<br>
4. Voltage multiplier<br>

</div>