{%- set _mod_docs_content_type = "REFERENCE" %}
# Grandmaster clock class sync state reference {id="nw-ptp-grandmaster-clock-class-reference_{{ context }}"}

The following table describes the PTP grandmaster clock (T-GM) `gm.ClockClass` states. {._abstract}

Clock class states categorize T-GM clocks based on their accuracy and stability with regard to the Primary Reference Time Clock (PRTC) or other timing source.

Holdover specification is the amount of time a PTP clock can maintain synchronization without receiving updates from the primary time source.

**T-GM clock class states**

|     |     |
| --- | --- |
| Clock class state | Description |
| `gm.ClockClass 6` | T-GM clock is connected to a PRTC in `LOCKED` mode. For example, the PRTC is traceable to a GNSS time source. |
| `gm.ClockClass 7` | T-GM clock is in `HOLDOVER` mode, and within holdover specification. The clock source might not be traceable to a category 1 frequency source. |
| `gm.ClockClass 248` | T-GM clock is in `FREERUN` mode. |

For more information, see ["Phase/time traceability information", ITU-T G.8275.1/Y.1369.1 Recommendations](https://www.itu.int/rec/T-REC-G.8275.1-202211-I/en).