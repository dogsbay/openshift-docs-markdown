{%- set _mod_docs_content_type = "CONCEPT" %}
# Static mode enforcement {id="static-mode-enforcement_{{ context }}"}

In static mode, the system locks the device set after initial discovery. If a volume group lacks explicit paths, newly attached devices are automatically excluded to prevent unintended volume expansions. {._abstract}

This strict filtering behavior does not apply during the very first reconciliation cycle. During this initial pass, the Operator discovers all available devices to successfully create the volume group. Once created, the Operator locks the device set during all subsequent reconciliations.

The discovery policy also controls whether the controller re-queues for periodic device scanning:

**Requeue behavior by configuration**

| Configuration | Periodic requeue |
| --- | --- |
| Explicit paths | No: paths define the exact device set; changes trigger reconciliation by using the `LVMVolumeGroup` watch |
| Dynamic without explicit paths | Yes: every 30 seconds |
| Static without explicit paths | No: device set is locked after creation |