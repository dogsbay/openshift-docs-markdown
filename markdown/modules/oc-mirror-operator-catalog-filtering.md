{%- set _mod_docs_content_type = "REFERENCE" %}
# How filtering works in the operator catalog {id="oc-mirror-operator-catalog-filtering_{{ context }}"}

oc-mirror plugin v2 selects the list of bundles for mirroring by processing the information in `imageSetConfig`. {._abstract}

When oc-mirror plugin v2 selects bundles for mirroring, it does not infer Group Version Kind (GVK) or bundle dependencies, omitting them from the mirroring set. Instead, it strictly adheres to the user instructions. You must explicitly specify any required dependent packages and their versions.

***Use the following table to see what bundle versions are included in different scenarios***

<table>
<thead>
<tr>
  <th>ImageSetConfig operator filtering</th>
  <th>Expected bundle versions</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Scenario 1<br><br><pre>mirror:&#10; operators:&#10;   - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.10</pre></td>
  <td>For each package in the catalog, one bundle, corresponding to the head version for each channel of that package.</td>
</tr>
<tr>
  <td>Scenario 2<br><br><pre>mirror:&#10;  operators:&#10;    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.10&#10;      full: true</pre></td>
  <td>All bundles of all channels of the specified catalog.</td>
</tr>
<tr>
  <td>Scenario 3<br><br><pre>mirror:&#10;  operators:&#10;    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.10&#10;     packages:&#10;    - name: compliance-operator</pre></td>
  <td>One bundle, corresponding to the head version for each channel of that package.</td>
</tr>
<tr>
  <td>Scenario 4<br><br><pre>mirror:&#10;  operators:&#10;    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.10&#10;      full: true&#10;      - packages:&#10;          - name: elasticsearch-operator</pre></td>
  <td>All bundles of all channels for the packages specified.</td>
</tr>
<tr>
  <td>Scenario 5<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;       minVersion: 5.6.0</pre></td>
  <td>All bundles in all channels, from the <code>minVersion</code>, up to the channel head for that package.</td>
</tr>
<tr>
  <td>Scenario 6<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        maxVersion: 6.0.0</pre></td>
  <td>All bundles in all channels that are lower than the <code>maxVersion</code> for that package.</td>
</tr>
<tr>
  <td>Scenario 7<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        minVersion: 5.6.0&#10;        maxVersion: 6.0.0</pre></td>
  <td>All bundles in all channels, between the <code>minVersion</code> and <code>maxVersion</code> for that package. The head of the channel is not included, even if multiple channels are included in the filtering.</td>
</tr>
<tr>
  <td>Scenario 8<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable</pre></td>
  <td>The head bundle for the selected channel of that package. You must use the <code>defaultChannel</code> field in case the filtered channels are not the default.</td>
</tr>
<tr>
  <td>Scenario 9<br><br><pre>mirror:&#10;  operators:&#10;    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.10&#10;      full: true&#10;      - packages:&#10;          - name: elasticsearch-operator&#10;            channels:&#10;               - name: 'stable-v0'</pre></td>
  <td>All bundles for the packages and channels specified.</td>
</tr>
<tr>
  <td>Scenario 10<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable&#10;          - name: stable-5.5</pre></td>
  <td>The head bundle for each selected channel of that package.</td>
</tr>
<tr>
  <td>Scenario 11<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable&#10;            minVersion: 5.6.0</pre></td>
  <td>Within the selected channel of that package, all versions starting with the <code>minVersion</code> up to the channel head. You must use the <code>defaultChannel</code> field in case the filtered channels are not the default.</td>
</tr>
<tr>
  <td>Scenario 12<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable&#10;            maxVersion: 6.0.0</pre></td>
  <td>Within the selected channel of that package, all versions up to <code>maxVersion</code>.</td>
</tr>
<tr>
  <td>Scenario 13<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;       channels&#10;          - name: stable&#10;            minVersion: 5.6.0&#10;            maxVersion: 6.0.0</pre></td>
  <td>Within the selected channel of that package, all versions between the <code>minVersion</code> and <code>maxVersion</code>. The head of channel is not included, even if multiple channels are included in the filtering.</td>
</tr>
<tr>
  <td>Scenario 14<br><br><pre>mirror:&#10;  operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable&#10;        minVersion: 5.6.0&#10;        maxVersion: 6.0.0</pre></td>
  <td>Do not use this scenario. filtering by channel and by package with a <code>minVersion</code> or <code>maxVersion</code> is not allowed.</td>
</tr>
<tr>
  <td>Scenario 15<br><br><pre>mirror:&#10;  operators:&#10;   - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable&#10;        minVersion: 5.6.0&#10;        maxVersion: 6.0.0</pre></td>
  <td>Do not use this scenario. You cannot filter using <code>full:true</code> and the <code>minVersion</code> or <code>maxVersion</code>.</td>
</tr>
<tr>
  <td>Scenario 16<br><br><pre>mirror:&#10;  operators:&#10;    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.15&#10;      full: true&#10;    packages:&#10;    - name: compliance-operator&#10;        channels&#10;          - name: stable&#10;            minVersion: 5.6.0&#10;            maxVersion: 6.0.0</pre></td>
  <td>Do not use this scenario. You cannot filter using <code>full:true</code> and the <code>minVersion</code> or <code>maxVersion</code>.</td>
</tr>
</tbody>
</table>