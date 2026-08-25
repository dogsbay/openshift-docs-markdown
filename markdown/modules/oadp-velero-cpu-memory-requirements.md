{%- set _mod_docs_content_type = "CONCEPT" %}
# Velero CPU and memory requirements based on collected data {id="oadp-velero-cpu-memory-requirements_{{ context }}"}

The following recommendations are based on observations of performance made in the scale and performance lab. The backup and restore resources can be impacted by the type of plugin, the amount of resources required by that backup or restore, and the respective data contained in the persistent volumes (PVs) related to those resources. {._abstract}

## CPU and memory requirement for configurations {id="_cpu_and_memory_requirement_for_configurations"}
| Configuration types | <sup>[1]</sup> Average usage | <sup>[2]</sup> Large usage | resourceTimeouts |
| --- | --- | --- | --- |
| CSI | Velero:<br>CPU- Request 200m, Limits 1000m<br>Memory - Request 256Mi, Limits 1024Mi | Velero:<br>CPU- Request 200m, Limits 2000m<br>Memory- Request  256Mi, Limits 2048Mi | N/A |
| Restic | <sup>[3]</sup> Restic:<br>CPU- Request 1000m, Limits 2000m<br>Memory - Request 16Gi, Limits 32Gi | <sup>[4]</sup> Restic:<br>CPU - Request 2000m, Limits 8000m<br>Memory - Request 16Gi, Limits 40Gi | 900m |
| <sup>[5]</sup> Data Mover | N/A | N/A | 10m - average usage<br>60m - large usage |

1.  Average usage - use these settings for most usage situations.
1.  Large usage - use these settings for large usage situations, such as a large PV (500GB Usage), multiple namespaces (100+), or many pods within a single namespace (2000 pods+), and for optimal performance for backup and restore involving large datasets.
1.  Restic resource usage corresponds to the amount of data, and type of data. For example, many small files or large amounts of data can cause Restic to use large amounts of resources. The Velero documentation references 500m as a supplied default, for most of our testing we found a 200m request suitable with 1000m limit. As cited in the Velero documentation, exact CPU and memory usage is dependent on the scale of files and directories, in addition to environmental limitations.
1.  Increasing the CPU has a significant impact on improving backup and restore times.
1.  Data Mover - Data Mover default resourceTimeout is 10m. Our tests show that for restoring a large PV (500GB usage), it is required to increase the resourceTimeout to 60m.


:::note

The resource requirements listed throughout the guide are for average usage only. For large usage, adjust the settings as described in the table above.

:::


## Additional resources {id="_additional_resources" ._additional-resources}

*   [Customize Velero Install (Velero documentation)](https://velero.io/docs/v1.11/customize-installation/#customize-resource-requests-and-limits/)