{%- set _mod_docs_content_type = "SNIPPET" %}
```yaml
- path: source-crs/PerformanceProfile.yaml
  patches:
    - spec:
        # ...
        workloadHints:
          realTime: true
          highPowerConsumption: false
          perPodPowerManagement: true
        # ...
        additionalKernelArgs:
          - # ...
          - "cpufreq.default_governor=schedutil"
```

The `schedutil` governor is recommended, however, you can also use other governors, including `ondemand` and `powersave`.