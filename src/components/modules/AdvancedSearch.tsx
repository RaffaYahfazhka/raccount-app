
import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Input, Select } from '@/components/common/Input';
import { TransactionFilter } from '@/entities/Transaction';
import {
  SearchContainer,
  SearchHeader,
  SearchTitle,
  ToggleButton,
  SearchForm,
  FormGrid,
  FormGroup,
  Label,
  ButtonContainer
} from './AdvancedSearch.styles';

interface AdvancedSearchProps {
  onSearch: (filters: TransactionFilter) => void;
  onReset: () => void;
}

export const AdvancedSearch = ({ onSearch, onReset }: AdvancedSearchProps) => {
  const [expanded, setExpanded] = useState(false);
  const [filters, setFilters] = useState<TransactionFilter>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({});
    onReset();
  };

  const updateFilter = (key: keyof TransactionFilter, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };

  return (
    <SearchContainer>
      <SearchHeader>
        <SearchTitle>Advanced Search</SearchTitle>
        <ToggleButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? 'Collapse' : 'Expand'}
        </ToggleButton>
      </SearchHeader>

      <SearchForm expanded={expanded} onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <Label>Start Date</Label>
            <Input
              type="date"
              value={filters.startDate || ''}
              onChange={(e) => updateFilter('startDate', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>End Date</Label>
            <Input
              type="date"
              value={filters.endDate || ''}
              onChange={(e) => updateFilter('endDate', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>Account Name</Label>
            <Select
              value={filters.accountName || ''}
              onChange={(e) => updateFilter('accountName', e.target.value)}
            >
              <option value="">All</option>
              <option value="Cash">Cash</option>
              <option value="Supply">Supply</option>
              <option value="Service Revenue">Service Revenue</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Account Category</Label>
            <Select
              value={filters.accountCategory || ''}
              onChange={(e) => updateFilter('accountCategory', e.target.value)}
            >
              <option value="">All</option>
              <option value="Asset">Asset</option>
              <option value="Liability">Liability</option>
              <option value="Equity">Equity</option>
              <option value="Revenue">Revenue</option>
              <option value="Expense">Expense</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Min Debit Amount</Label>
            <Input
              type="number"
              placeholder="0"
              value={filters.minDebitAmount || ''}
              onChange={(e) => updateFilter('minDebitAmount', parseInt(e.target.value))}
            />
          </FormGroup>

          <FormGroup>
            <Label>Max Debit Amount</Label>
            <Input
              type="number"
              placeholder="0"
              value={filters.maxDebitAmount || ''}
              onChange={(e) => updateFilter('maxDebitAmount', parseInt(e.target.value))}
            />
          </FormGroup>

          <FormGroup>
            <Label>Min Credit Amount</Label>
            <Input
              type="number"
              placeholder="0"
              value={filters.minCreditAmount || ''}
              onChange={(e) => updateFilter('minCreditAmount', parseInt(e.target.value))}
            />
          </FormGroup>

          <FormGroup>
            <Label>Max Credit Amount</Label>
            <Input
              type="number"
              placeholder="0"
              value={filters.maxCreditAmount || ''}
              onChange={(e) => updateFilter('maxCreditAmount', parseInt(e.target.value))}
            />
          </FormGroup>
        </FormGrid>

        <ButtonContainer>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit">
            <Search size={16} style={{ marginRight: '0.25rem' }} />
            Search
          </Button>
        </ButtonContainer>
      </SearchForm>
    </SearchContainer>
  );
};
