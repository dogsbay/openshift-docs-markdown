{%- set _mod_docs_content_type = "REFERENCE" %}
# Node power consumption and realtime processing with workload hints {id="configuring-workload-hints_{{ context }}"}

You can create a performance profile appropriate for the hardware and topology of an environment by using the Performance Profile Creator (PPC) tool.  {._abstract}

The following table describes the possible values set for the `power-consumption-mode` flag associated with the PPC tool and the workload hint that is applied. 

**Impact of combinations of power consumption and real-time settings on latency**

<table>
<thead>
<tr>
  <th>Performance Profile creator setting</th>
  <th>Hint</th>
  <th>Environment</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Default</td>
  <td><pre>workloadHints:&#10;highPowerConsumption: false&#10;realTime: false</pre></td>
  <td>High throughput cluster without latency requirements</td>
  <td>Performance achieved through CPU partitioning only.</td>
</tr>
<tr>
  <td>Low-latency</td>
  <td><pre>workloadHints:&#10;highPowerConsumption: false&#10;realTime: true</pre></td>
  <td>Regional data-centers</td>
  <td>Both energy savings and low-latency are desirable: compromise between power management, latency and throughput.</td>
</tr>
<tr>
  <td>Ultra-low-latency</td>
  <td><pre>workloadHints:&#10;highPowerConsumption: true&#10;realTime: true</pre></td>
  <td>Far edge clusters, latency critical workloads</td>
  <td>Optimized for absolute minimal latency and maximum determinism at the cost of increased power consumption.</td>
</tr>
<tr>
  <td>Per-pod power management</td>
  <td><pre>workloadHints:&#10;realTime: true&#10;highPowerConsumption: false&#10;perPodPowerManagement: true</pre></td>
  <td>Critical and non-critical workloads</td>
  <td>Allows for power management per pod.</td>
</tr>
</tbody>
</table>

The following configuration is commonly used in a telco RAN DU deployment:

```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: workload-hints
    spec:
      ...
      workloadHints:
        realTime: true
        highPowerConsumption: false
        perPodPowerManagement: false
```

`perPodPowerManagement`
:   Specifies to disable some debugging and monitoring features that can affect system latency.


:::note

If you do not set the `realTime` workload hint, the hint defaults to `true`.

:::


For more information about how combinations of power consumption and real-time settings impact latency, see "Understanding workload hints".