import { useMemo, useState } from "react";
import type { GroupDetails } from "../types/GroupDetails";
import type { EventDetails } from "../types/EventDetails";
import GroupCard from "./GroupCard";
import EventCard from "./EventCard";

interface GroupSearchProps {
  dataSet: GroupDetails[] | EventDetails[];
}

// checks the type of the data
function isGroupDetails(
  data: GroupDetails | EventDetails,
): data is GroupDetails {
  return "groupName" in data;
}

export default function GroupSearch({ dataSet }: GroupSearchProps) {
  const [selectedRegion, setSelectedRegion] = useState("All");

  // gets all unique regions from groups
  const regions = useMemo(() => {
    const unique = new Set(dataSet.map((g) => g.region));
    return ["All", ...Array.from(unique)];
  }, [dataSet]);

  // filter groups by region
  const filteredGroups = useMemo(() => {
    return dataSet.filter((group) => {
      const matchesRegion =
        selectedRegion === "All" || group.region === selectedRegion;

      return matchesRegion;
    });
  }, [selectedRegion, dataSet]);

  // groups the details by region
  const groupsByRegion = useMemo(() => {
    const grouped: Record<string, (GroupDetails | EventDetails)[]> = {};

    filteredGroups.forEach((group) => {
      if (!grouped[group.region]) {
        grouped[group.region] = [];
      }
      grouped[group.region].push(group);
    });

    return grouped;
  }, [filteredGroups]);

  return (
    <>
      {/* region filter options */}
      <div className="support-group-search-controls">
        <h3>Our Groups</h3>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region === "All" ? "All Regions" : region}
            </option>
          ))}
        </select>
      </div>

      {/* support groups results */}
      <div>
        <p className="results-count">
          (Showing {filteredGroups.length} support group
          {filteredGroups.length === 1 ? "" : "s"})
        </p>
        {/* clear button if no results found */}
        {filteredGroups.length === 0 ? (
          <div>
            <p>No support groups found.</p>
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSelectedRegion("All")}
            >
              Clear Filter
            </button>
          </div>
        ) : (
          /* groups the details by region */
          Object.entries(groupsByRegion).map(([regionName, groupsInRegion]) => (
            <div key={regionName} className="groups-results-section">
              <h3>{regionName}</h3>
              <div className="groups-results-card-section">
                {groupsInRegion.map((data) => {
                  // use group card for group details only
                  if (isGroupDetails(data)) {
                    return <GroupCard key={data.id} data={data} />;
                  }
                  return <EventCard key={data.id} data={data} />;
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
